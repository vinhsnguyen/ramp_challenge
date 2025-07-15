import './App.css';
import {useEffect, useState} from 'react';

function FlagList() {
  const [flag, setFlag] = useState('');
  const [Chars, setChars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const url = 'https://wgg522pwivhvi5gqsn675gth3q0otdja.lambda-url.us-east-1.on.aws/6f7665';

    fetch(url)
      .then((res) => res.text())
      .then((text) => {
        setFlag(text);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Fetch error:', err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!loading && flag) {
      const interval = setInterval(() => {
        setChars((prev) => {
          if (prev.length < flag.length) {
            return [...prev, flag[prev.length]];
          } else {
            clearInterval(interval);
            return prev;
          }
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [loading, flag]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul>
      {Chars.map((char, idx) => (
        <li key={idx}>{char}</li>
      ))}
    </ul>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <FlagList />
      </header>
    </div>
  );
}

export default App;

/*
// The code for finding the flag (Step 2)

from lxml import html
import re

file_path = "ramp_challenge.html"
result = ""

with open(file_path, 'r', encoding='utf-8') as file:
    tree = html.parse(file)
root = tree.getroot()

for section in tree.iter("section"):
    if re.search( "^92.*", section.attrib.get('data-id', "0")):
        for article in section.iter("article"):
            if re.search(".*45$", article.attrib.get("data-class", "0")):
                for div in article.iter("div"):
                    if re.search(".*78.*", div.attrib.get("data-tag", "0")):
                        for b in div.iter("b"):
                            if b.attrib.get("class", "") == "ramp ref":
                                result += b.attrib.get("value", "")

print(result)
*/
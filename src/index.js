import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

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
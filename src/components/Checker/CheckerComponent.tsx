import React, { useState, useEffect } from 'react'
import './CheckerComponent.css'

const CheckerComponent = () => {
  const [text, setText] = useState('');
  const [subText, setSubText] = useState('');
  const [selectedOperation, setSelectedOperation] = useState('');
  const [result, setResult] = useState('');
  const [resultMessage, setResultMessage] = useState('');
  const [showSubText, setShowSubText] = useState(false);
  
  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  }

  const handleSubTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSubText(e.target.value);
  }

  const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOperation(e.target.value);
    setShowSubText(e.target.value == 'anagram');
    setSubText('');
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let res;
    let msg;

    switch (selectedOperation) {
      case 'palindrome':
        let isPalidrome = text === text.split('').reverse().join('');
        res = isPalidrome ? 'success' : 'danger';
        msg = `${text} is ${isPalidrome ? 'a palindrome' : 'not a palindrome'}`;
        break;
      case 'anagram':
        const isAnagram = text.split('').sort().join('') === subText.split('').sort().join('');
        res = isAnagram ? 'success' : 'danger';
        msg = `${text} is ${isAnagram ? 'an anagram' : 'not an anagram'} of '${subText}'`;
        break;
      case 'pangram':
        const alphabet = 'abcdefghijklmnopqrstuvwxyz';
        const isPangram = alphabet.split('').every((char) => text.toLowerCase().includes(char));
        res = isPangram ? 'success' : 'danger';
        msg = `${text} is ${isPangram ? 'a pangram' : 'not a pangram'}`;
        break;
      default:
        res = 'danger';
        msg = 'Unknown Operation Type';
    }

    setResult(res);
    setResultMessage(msg);
  }

  useEffect(() => {
    if (result) {
      const timer = setTimeout(() => {
        setResult('');
        setResultMessage('');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [result]);

  return (
  <>
    <div className="form-container">
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor='text'>Enter a string:</label>
          <textarea name="text-to-perform" id="text" value={text} onChange={handleTextChange} required></textarea>
        </div>

        {showSubText && 
          <div className="form-group">
            <label htmlFor="subText">Enter a Second String:</label>
            <textarea name="subtext-to-perform" id="subtext" value={subText} onChange={handleSubTextChange}></textarea>
          </div>
        }
        
        <div className="form-group">
          <label htmlFor="operation">Select operation:</label>
          <select id="operation" name="operation" value={selectedOperation} onChange={handleOperationChange}>
              <option value="">Select Operation</option>
              <option value="palindrome">Palindrome</option>
              <option value="pangram">Pangram</option>
              <option value="anagram">Anagram</option>
          </select>
        </div>
        
        <button type="submit" className="btn-submit">Perform Operation</button>
      </form>

      {result && (
        <div className={`result result-${result}`}>
          <p>{resultMessage}</p>
        </div>
      )}
    </div>

    
  </>
  )
}

export default CheckerComponent
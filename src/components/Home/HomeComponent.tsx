import React from 'react'
import './HomeComponent.css'

const HomeComponent = () => {
  return (
    <div className="home-content">
    <h2 className="page-title text-center">Home</h2>

    <div className="content-section">
        <p>In this app, you can perform various string operations such as checking if a string is a palindrome, verifying if two strings are anagrams, and determining if a string is a pangram.</p>
    </div>
    
    <div className="content-section">
        <strong>1. Palindrome Check:</strong>
        <p>A palindrome is a string that reads the same forward and backward. To determine if a string is a palindrome, you compare the string to its reverse. If both are identical, the string is a palindrome.</p>
    </div>
    
    <div className="content-section">
        <strong>2. Anagram Check:</strong>
        <p>Anagrams are strings that have the same characters in a different order. To check if two strings are anagrams, you compare their character frequencies. If both strings contain the same characters with the same frequencies, they are anagrams.</p>
    </div>

    <div className="content-section">
        <strong>3. Pangram Check:</strong>
        <p>A pangram is a string that contains every letter of the alphabet at least once. To verify if a string is a pangram, you typically check if it includes all 26 letters of the English alphabet, disregarding case.</p>
    </div>
</div>

  )
}

export default HomeComponent
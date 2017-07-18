/*jshint esversion: 6*/

// Assume you have a method isSubstring which checks if one word is a substring of another.  Given two strings, s1 and s2, write code to check if s2 is a rotation of s1 using only one call to isSubstring (e.g., "waterbottle" is a rotation of "erbottlewat")

const isSubstring = (s1,s2) => s1.includes(s2);

const isRotation = (s1,s2) => isSubstring(s1+s1,s2);


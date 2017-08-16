Authors:
Nate McGregor
Aaron Rohrbacher

| Spec                                                                                                         | input    | output     |
|--------------------------------------------------------------------------------------------------------------|----------|------------|
| Does nothing if character is a non-alphabetical                                                              | "word!"  | "word!"    |
| Add "ay" to end of every word.                                                                               | "word"   | "worday"   |
| Remove first letter from word                                                                                | "word"   | "orday"    |
| Add first letter to end of word, beginning of "ay"                                                           | "word"   | "ordway"   |
| add "w" to "ay" if first letter is a vowel, and do not remove letter                                         | "apple"  | "appleway" |
| Move all letters at beginning of word until vowel is reached to end of word (unless first letter is a vowel) | "track"  | "acktray"  |
| for words where letter "y" is acting as a vowel (not first letter), treat as a vowel.                        | "myth"   | "ythmay"   |
| cont.                                                                                                        | "yellow" | "ellowyay" |

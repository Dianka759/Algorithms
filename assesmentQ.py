length = input("Please input the length: ")
while length.isnumeric() != True or 0 > int(length) or int(length) > 100:
    print("please input a number between 0 and 100")
    length = input("LENGTH ")

word = input("Please input the word: ")
while word.isnumeric() == True or 1 > len(word) or len(word) > 50:
    print("please input a string between 1 and 50 characters")
    word = input("THE WORD ")

result = (word + "\n") * int(length)
print(result)

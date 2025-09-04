import json
# Python code to parse error logs
import sys
import os

if len(sys.argv) != 2:
    raise ValueError('Please provide environment and filename')
environmentArg = sys.argv[0]  
filename = sys.argv[1]

def get_environment(arg)
    if(arg == "Test2"):
        



#get current working directory
inputdir = os.getcwd()

validString = "it won't be added to the library"
count = 0  
L = []
# Using readlines() 
for file in os.listdir(inputdir):
    if ".log" in file:
        file1 = open(file, encoding="utf8") 
        Lines = file1.readlines() 
        # Strips the newline character 
       
  
        for line in Lines: 
            count += 1
            if validString in line:
                print("Line{}: {}".format(count, line.strip())) 
                L.append(line[98:len(line)])
            else:
                print("Invalid")
    else:
        print(file)

file2 = open('fielog.txt', 'w',encoding="utf8") 
file2.writelines(L) 
file2.close() 
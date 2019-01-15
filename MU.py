# Simple implementation of the rules, if you
# want to try this the HTML/JS version is recommended

collection = ['MI']

print(collection)

def rule1(string):
    #RULE I: If you possess a string whose last
    #letter is I you can add on a U at the end.
    global collection
    if string[-1] == "I":
        string += 'U'
        collection.append(string)
        return print(collection)
    else:
        return print("Last letter is not I", string)

def rule2(string):
    #RULE II: Suppose you have Mx.
    #Then you may add Mxx to your collection.
    global collection
    if string[0] == 'M':
        string = 'M' + (string[1:]*2)
        collection.append(string)
        return print(collection)
    else:
        return print("First letter is not M", collection)
        
def rule3(string):
    #RULE III: If III occurs in one of the
    #strings in your collection, you may make
    #a new string with U in place of III
    global collection
    if 'III' in string:
        x = int(input("Index of IIIs (" + str(string.find('III')) + "?): "))
        collection.append(string[0:x] + 'U' + string[x+3:])
        return print(collection)
    else:
        print("III not in string", collection)

def rule4(string):
    #RULE IV: If UU occurs inside one
    #of your strings, you can drop it.
    global collection
    if 'UU' in string:
        collection.append(string[0:string.find('UU')] + string[string.find('UU')+2:])
        print(collection)
    else:
        print("UU not in string", collection)
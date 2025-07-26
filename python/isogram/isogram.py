import re

def is_isogram(string):
    chars = []

    map(print, chars)

    for char in list(string.lower()):
        if not re.search('[a-z]', char):
            continue

        if char not in chars:
            chars.append(char)
        else:
            return False

    return True

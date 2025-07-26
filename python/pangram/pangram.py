def is_pangram(phrase):
    alphabet = ''.join([chr(i) for i in range(97, 122 + 1)])

    for char in list(phrase.lower()):
        if char in alphabet:
            parts = alphabet.partition(char)
            alphabet = parts[0] + parts[2]

    return not len(alphabet)

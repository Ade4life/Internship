import random
import string

def generate_random_password(length):
    characters = string.ascii_letters + string.digits + string.punctuation
    password = ''.join(random.choice(characters) for i in range(length))
    return password

def check_password_strength(password):
    length = len(password)
    
    # Define password strength based on length
    if length < 8:
        return "Very Weak"
    elif length < 12:
        return "Weak"
    elif length < 16:
        return "Medium"
    elif length < 20:
        return "Strong"
    else:
        return "Very Strong"

def main():
    desired_length = int(input("Enter the desired password length (8-16 characters): "))
    
    if desired_length < 8 or desired_length > 16:
        print("Please enter a valid length between 8 and 16 characters.")
        return
    
    generated_password = generate_random_password(desired_length)
    password_strength = check_password_strength(generated_password)
    
    print("Generated Password:", generated_password)
    print("Password Length:", len(generated_password))
    print("Password Strength:", password_strength)

if __name__ == "__main__":
    main()


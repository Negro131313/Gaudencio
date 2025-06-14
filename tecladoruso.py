from pynput import keyboard

# Diccionario fonético QWERTY → Cirílico (ejemplo básico)
qwerty_to_cyrillic = {
    'a': 'а', 'b': 'б', 'c': 'ц', 'd': 'д', 'e': 'е', 
    'f': 'ф', 'g': 'г', 'h': 'х', 'i': 'и', 'j': 'й',
    'k': 'к', 'l': 'л', 'm': 'м', 'n': 'н', 'o': 'о',
    'p': 'п', 'q': 'я', 'r': 'р', 's': 'с', 't': 'т',
    'u': 'у', 'v': 'в', 'w': 'ш', 'x': 'щ', 'y': 'ы',
    'z': 'з', ';': 'ж', "'": 'э', '[': 'х', ']': 'ъ',
    ' ': ' ',  # Espacio
}

current_text = ""

def on_press(key):
    global current_text
    try:
        char = key.char.lower()
        if char in qwerty_to_cyrillic:
            current_text += qwerty_to_cyrillic[char]
            print(f"\rTexto: {current_text}", end="", flush=True)
    except AttributeError:
        if key == keyboard.Key.space:
            current_text += ' '
        elif key == keyboard.Key.backspace:
            current_text = current_text[:-1]
            print(f"\rTexto: {current_text}", end="", flush=True)
        elif key == keyboard.Key.enter:
            print(f"\nTexto final: {current_text}")
            current_text = ""

def on_release(key):
    if key == keyboard.Key.esc:
        print("\nSaliendo del modo ruso...")
        return False

# Configuración
print("=== Simulador de Teclado Ruso (QWERTY → Cirílico) ===")
print("Instrucciones:")
print("- Escribe en QWERTY (ej: 'privet') → Salida: 'привет'")
print("- Presiona [Enter] para reiniciar")
print("- Presiona [ESC] para salir\n")

with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
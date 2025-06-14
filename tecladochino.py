from pynput import keyboard

# Diccionario Pinyin → Hanzi (ejemplo básico)
pinyin_hanzi = {
    "ni": ["你", "尼", "泥"],
    "hao": ["好", "号", "豪"],
    "ni hao": ["你好", "拟好"],  # Combinaciones comunes
    "wo": ["我", "窝", "握"],
    "ai": ["爱", "哎", "艾"],
    "zhong guo": ["中国", "种果"],
}

current_pinyin = ""
candidates = []

def show_candidates():
    global candidates
    candidates = pinyin_hanzi.get(current_pinyin, [])
    if candidates:
        print("\n候选字 (Candidatos):")
        for i, hanzi in enumerate(candidates, 1):
            print(f"{i}. {hanzi}")

def on_press(key):
    global current_pinyin
    try:
        char = key.char
        if char.isalpha():  # Solo letras (sin tonos)
            current_pinyin += char
            print(f"\r拼音: {current_pinyin}", end="", flush=True)
        elif char == " ":  # Espacio = buscar Hanzi
            show_candidates()
    except AttributeError:
        if key == keyboard.Key.enter and candidates:
            print(f"\n输出: {candidates[0]}")  # Selecciona el primero (como un IME real)
            current_pinyin = ""
            candidates = []
        elif key == keyboard.Key.backspace:
            current_pinyin = current_pinyin[:-1]
            print(f"\r拼音: {current_pinyin}", end="", flush=True)

def on_release(key):
    if key == keyboard.Key.esc:
        print("\nSaliendo del modo Pinyin...")
        return False

# Configuración inicial
print("=== Simulador de Teclado Pinyin (como en China) ===")
print("Instrucciones:")
print("- Escribe en Pinyin (ej: 'ni hao')")
print("- Presiona [Espacio] para ver candidatos")
print("- Presiona [Enter] para seleccionar el primero")
print("- Presiona [ESC] para salir\n")

with keyboard.Listener(on_press=on_press, on_release=on_release) as listener:
    listener.join()
import pyautogui
import keyboard
import time
import sys
from ctypes import windll

# Configuración esencial
pyautogui.FAILSAFE = False
windll.shcore.SetProcessDpiAwareness(1)  # Mejor detección en pantallas HD

def main():
    print("Control activo: Numpad0 = Clic izquierdo | F12 = Salir")
    while True:
        if keyboard.is_pressed('num 0'):
            pyautogui.mouseDown(button='left')
            while keyboard.is_pressed('num 0'):
                time.sleep(0.01)
            pyautogui.mouseUp(button='left')
        
        if keyboard.is_pressed('F12'):
            print("Script finalizado")
            sys.exit()
        
        time.sleep(0.01)

if __name__ == "__main__":
    main()
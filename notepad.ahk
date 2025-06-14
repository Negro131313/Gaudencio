; === MODO PROGRAMACIÓN (NumLock DESACTIVADO) ===
#If, !NumLock  ; Solo activa si NumLock está APAGADO

; --- Símbolos Esenciales ---
Numpad1::Send, <    ; Menor que (para etiquetas HTML, condicionales)
Numpad2::Send, >    ; Mayor que
Numpad3::Send, {{}  ; Llave de apertura
Numpad4::Send, {}}  ; Llave de cierre
Numpad5::Send, [    ; Corchete abierto
Numpad6::Send, ]    ; Corchete cerrado
Numpad7::Send, (    ; Paréntesis abierto
Numpad8::Send, )    ; Paréntesis cerrado
Numpad9::Send, `%   ; Porcentaje (para cadenas de formato)
Numpad0::Send, ``   ; Backtick (template strings en JS)

; --- Combinaciones con Shift ---
+Numpad1::Send, <=   ; Menor o igual que
+Numpad2::Send, >=   ; Mayor o igual que
+Numpad3::Send, ->   ; Flecha (para lambdas o tipos)
+Numpad4::Send, =>   ; Flecha gruesa (JS/Python)

#If  ; Fin del bloque condicional
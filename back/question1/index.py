#run print --> python -u index.py

noteList = []
note = 0.0
maxLengthList = 2
while len(noteList) < maxLengthList:
    try:
        note = int(float(input("Ingresa una nota: ")))
        print(note)
        if note <= 20:
            noteList.append(note)
        else:
            print('La nota debe ser menor o igual a 20, vuelve a ingresar')
    except (TypeError, ValueError) as e:
        print(f'El valor ingresado no es un numero, vuelve a ingresar el valor')
    except Exception as e:
        print(e.__class__.__name__)
        print(f'Ocurrio un problema: {e}')

print(noteList)
print(f"La suma es {(sum(noteList))}.")
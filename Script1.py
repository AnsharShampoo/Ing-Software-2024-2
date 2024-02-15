def definir_numero_de_sets():
    primera_pregunta = True
    while True:
        try:
            if(primera_pregunta):
                primera_pregunta = False
                sets = int(input("¿Cuántos sets jugaremos hoy?\n"))
            else:
                sets = int(input("Intentemos de nuevo, ¿Cuántos sets serán?\n"))
            if(sets%2==0):
                raise ValueError("No olvides leer las reglas antes de comenzar a jugar!\nEl número de sets no puede ser par!\n")
        except ValueError as e:
            if "invalid literal for int() with base 10" in str(e):
                print("Woopsie: Hey! No me digas cosas raras! Por favor ingresa un entero impar!\n")
            else:
                print("Woopsie:", e)
        else:
            print(f"Excelente! Entonces se jugará a {sets} sets!\n")
            break
    return sets

def  marcador(puntos: int):
    if(puntos == 0):
        return "0"
    elif(puntos == 1):
        return "15"
    elif(puntos == 2):
        return "30"
    elif(puntos == 3):
        return "40"
    elif(puntos == 4):
        return "adv."
    else:
        return "win"

def main():
    sets_j1 = 0
    sets_j2 = 0
    print("Bienvenido a Tenis_Score!")
    jugador1 = input("Por favor dime el nombre del primer jugador: ")
    jugador2 = input("Por favor dime el nombre del segundo jugador: ")
    sets = definir_numero_de_sets()
    while(sets_j1<(int(sets/2)+1) and sets_j2<(int(sets/2)+1)):
        juegos_j1 = 0
        juegos_j2 = 0
        juego = 0
        while(abs(juegos_j1-juegos_j2)<2 or max(juegos_j1,juegos_j2)<6):
            if(juego%2!=0):
                print("******************")
                print("*CAMBIO DE CANCHA*")
                print("******************\n")
            juego+=1
            saque = jugador1 if juego%2==0 else jugador2
            print(f"Durante este juego sacará {saque}!\n")
            puntos_j1 = 0
            puntos_j2 = 0
            while(True):
                try:
                    punto_actual = input("¿Quién ganó el punto?\n")
                    if(punto_actual != jugador1 and punto_actual != jugador2):
                        raise ValueError(f"Ese jugador no está registrado (los jugadores registrados son {jugador1} y {jugador2})\n")
                except ValueError as e:
                    print("Woopsie:", e)
                else:
                    if(punto_actual == jugador1):
                        puntos_j1+=1
                    else:
                        puntos_j2+=1
                    print(f"Punto para {punto_actual}\n")
                    print("##MARCADOR##")
                    if((puntos_j1==4 and puntos_j2<3) or (puntos_j2==4 and puntos_j1<3) or (puntos_j1==5 and puntos_j2<4) or (puntos_j2==5 and puntos_j1<4)):
                        if(puntos_j1>puntos_j2):
                            print(f"Juego para {jugador1}\n")
                            juegos_j1+=1 
                        else:
                            print(f"Juego para {jugador2}\n")
                            juegos_j2+=1
                        break
                    elif(puntos_j1==4 and puntos_j2==puntos_j1):
                        print("##40--40##")
                        puntos_j1 = 3
                        puntos_j2 = 3
                    elif((puntos_j1==4 and puntos_j2<puntos_j1) or (puntos_j2==4 and puntos_j1<puntos_j2)):
                        print(f"##{marcador(puntos_j1)}-{marcador(puntos_j2)}##")
                    else:
                        print(f"##{marcador(puntos_j1)}-{marcador(puntos_j2)}##")
            print("##MARCADOR DE JUEGOS##")
            print(f"{juegos_j1}-{juegos_j2}")
        if(juegos_j1>juegos_j2):
            sets_j1+=1
        else:
            sets_j2+=1
        print("##MARCADOR DE SETS##")
        print(f"{sets_j1}-{sets_j2}")
    ganador = jugador1 if sets_j1>sets_j2 else jugador2
    print(f"Paren todo! Tenemos un ganador!\nMuchas felicidades {ganador}!!!")
    return 0

if __name__ == "__main__":
    main()
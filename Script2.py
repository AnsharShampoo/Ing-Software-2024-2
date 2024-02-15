class Nodo:
    def __init__(self, valor):
        self.valor = valor
        self.izquierda = None
        self.derecha = None

class ArbolBinario:
    def __init__(self):
        self.raiz = None

    def agregar(self, valor):
        if self.raiz is None:
            self.raiz = Nodo(valor)
        else:
            self._agregar_recursivo(self.raiz, valor)

    def _agregar_recursivo(self, NodoActual, valor):
        if valor < NodoActual.valor:
            if NodoActual.izquierda is None:
                NodoActual.izquierda = Nodo(valor)
            else:
                self._agregar_recursivo(NodoActual.izquierda, valor)
        else:
            if NodoActual.derecha is None:
                NodoActual.derecha = Nodo(valor)
            else:
                self._agregar_recursivo(NodoActual.derecha, valor)

    def inorder_traversal(self):
        if self.raiz is not None:
            self._inorder_traversal_recursivo(self.raiz)

    def _inorder_traversal_recursivo(self, NodoActual):
        if NodoActual is not None:
            self._inorder_traversal_recursivo(NodoActual.izquierda)
            print(NodoActual.valor)
            self._inorder_traversal_recursivo(NodoActual.derecha)
    def preorder_traversal(self):
        if self.raiz is not None:
            self._preorder_traversal_recursivo(self.raiz)

    def _preorder_traversal_recursivo(self, NodoActual):
        if NodoActual is not None:
            print(NodoActual.valor)
            self._preorder_traversal_recursivo(NodoActual.izquierda)
            self._preorder_traversal_recursivo(NodoActual.derecha)

    def postorder_traversal(self):
        if self.raiz is not None:
            self._postorder_traversal_recursivo(self.raiz)

    def _postorder_traversal_recursivo(self, NodoActual):
        if NodoActual is not None:
            self._postorder_traversal_recursivo(NodoActual.izquierda)
            self._postorder_traversal_recursivo(NodoActual.derecha)
            print(NodoActual.valor)

def valles_caminante(recorrido: str):
    valles = 0
    caminante = 0
    for direccion in recorrido:
        if(direccion == 'U'):
            caminante+=1
            if(caminante == 0):
                valles+=1
        elif(direccion == 'D'):
            caminante-=1
        else:
            return "instrucción inválida, asegurate de que tu recorrido sólo contenga U y D."
    return valles
            

if __name__ == '__main__':
    # Creamos un árbol binario
    tree = ArbolBinario()

    # Agregamos valores al árbol binario
    tree.agregar(5)
    tree.agregar(3)
    tree.agregar(7)
    tree.agregar(2)
    tree.agregar(4)
    tree.agregar(6)
    tree.agregar(8)

    # inorder traversal
    print("Inorder Traversal:")
    tree.inorder_traversal()

    # preorder traversal
    print("Preorder Traversal:")
    tree.preorder_traversal()

    # postorder traversal
    print("Postorder Traversal:")
    tree.postorder_traversal()

    #Probamos la función de valles_caminante:
    print("Prueba función que cuenta valles:")
    recorrido1 = "UUUDDDUUUDDDUUU"
    recorrido2 = "DUDUDUDU"
    recorrido3 = "DDDDDDDDDDDDDDDDD"
    recorrido4 = "UUDDDDUUUUDDDUU"
    print(valles_caminante(recorrido1))
    print(valles_caminante(recorrido2))
    print(valles_caminante(recorrido3))
    print(valles_caminante(recorrido4))



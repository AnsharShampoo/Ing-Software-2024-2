import matplotlib.pyplot as plt
import numpy as np

def main():
    fig = plt.figure(figsize = (12,10))
    ax = plt.axes(projection='3d')

    x = np.arange(-10, 5.1, 0.2)
    y = np.arange(-10, 5.1, 0.2)

    X, Y = np.meshgrid(x, y)
    Z = np.sin(X)*2*np.cos(Y)

    surf = ax.plot_surface(X, Y, Z, cmap = plt.cm.cividis)

    # Set axes label
    ax.set_xlabel('x', labelpad=20)
    ax.set_ylabel('y', labelpad=20)
    ax.set_zlabel('z', labelpad=20)

    fig.colorbar(surf, shrink=0.5, aspect=8)

    plt.show()

if __name__ == '__main__':
    main()
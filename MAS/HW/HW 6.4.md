6.4 2,4,10,14
# #2
Produce an orthogonal basis for $W$ which is given by the span of the below vectors.
![[meta/images/Pasted image 20250403133941.png]]

$$
u_{1} = x_{1}=\begin{bmatrix}
0 \\
4 \\
2
\end{bmatrix}
$$
Next we just need the component of $x_{2}$ that is orthogonal to any previous vectors we calculated
$$
u_{2} = x_{2}-\text{proj}_{W_{1}}x_{2}
$$
$$
\begin{align}
u_{1}^{2}=20 \\
u_{1} \cdot x_{2}=10 \\
\end{align}
$$
$$
\frac{u_{1}\cdot x_{2}}{u_{1}^{2}}u_{1}=\frac{1}{2}\begin{bmatrix}
0 \\
4 \\
2
\end{bmatrix} = \begin{bmatrix}
0 \\
2 \\
1
\end{bmatrix}
$$
$$
\implies u_{2}=\begin{bmatrix}
5 \\
6 \\
-7
\end{bmatrix} - \begin{bmatrix}
0 \\
1 \\
2
\end{bmatrix} = \begin{bmatrix}
5 \\
5 \\
-9
\end{bmatrix}
$$
And we check by seeing if they are orthogonal
$$
\begin{bmatrix}
0 \\
4 \\
2
\end{bmatrix} \cdot \begin{bmatrix}
5 \\
5 \\
-9
\end{bmatrix} = 20-18
$$

# #4
# #10
# #14
6.4 2,4,10,14 pp 380# #2
**Produce an orthogonal basis for $W$ which is given by the span of the below vectors.**
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
2 \\
1
\end{bmatrix} = \begin{bmatrix}
5 \\
4 \\
-8
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
4 \\
-8
\end{bmatrix} = \6-16
$$

# #4
**Same as above**
![[meta/images/Pasted image 20250403141128.png|325]]

$$
u_{1} = x_{1} = \begin{bmatrix}
3 \\
-4 \\
5
\end{bmatrix}
$$
$$
u_{2} = x_{2}-\text{proj}_{W_{1}}x_{2}
= \begin{bmatrix}
-3 \\
14 \\
-7
\end{bmatrix} - \begin{bmatrix}
-6 \\
8 \\
-10
\end{bmatrix}
=\begin{bmatrix}
3 \\
6 \\
3
\end{bmatrix}
$$
# #10
**Same as above but just use the the Column vectors of this matrix as $\vec{u}_1, \dots , \vec{u_n}$**
![[meta/images/Pasted image 20250403142209.png|342]]

$$
u_{1} = \begin{bmatrix}
-1 \\
3 \\
1 \\
1 \\
\end{bmatrix}
$$

$$
u_{2} = x_{2} - \text{proj}_{W_{1}}x_{2} = \begin{bmatrix}
6 \\
-8 \\
-2 \\
-4
\end{bmatrix} - \begin{bmatrix}
3 \\
-9 \\
-3 \\
-3
\end{bmatrix} = \begin{bmatrix}
3 \\
1 \\
1 \\
-1
\end{bmatrix}
$$
$$
u_{3} = x_{3} - \text{proj}_{W_{2}}x_{3}=\begin{bmatrix}
6 \\
3 \\
6 \\
-3
\end{bmatrix} - \begin{bmatrix}
-8 \\
-4 \\
-4 \\
3
\end{bmatrix} = \begin{bmatrix}
14 \\
7 \\
10 \\
0
\end{bmatrix}
$$
$$
\begin{bmatrix}
-1 & 3 & -17 \\
3 & 1 & -12 \\
1 & 1 & -19 \\
1 & -1 & 8
\end{bmatrix}
$$

# #14
**6.5 pp 388 
2, 6, 10, 12, 14**
# #2
**Find the least squares solution**
![[meta/images/Pasted image 20250407140846.png]]
Our basis is not orthogonal so we cannot use the QR factorization. Instead we use:

$$
A^Tb=A^TAx
$$

$$
A^T = \begin{bmatrix}
2 & -2 & 2 \\
1 & 0 & 3
\end{bmatrix}
$$
$$
A^TA = \begin{bmatrix}
2 & -2 & 2 \\
1 & 0 & 3
\end{bmatrix} \begin{bmatrix}
2 & 1 \\
-2 & 0 \\
2 & 3
\end{bmatrix} = \begin{bmatrix}
12 & 8 \\
8 & 10
\end{bmatrix}
$$
$$
A^Tb=\begin{bmatrix}
2 & -2 & 2 \\
1 & 0 & 3
\end{bmatrix} \begin{bmatrix}
-5 \\
8 \\
1
\end{bmatrix} = \begin{bmatrix}
-10-16
\end{bmatrix}
$$

# #6
# #10
# #12
# #14
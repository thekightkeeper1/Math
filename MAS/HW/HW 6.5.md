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
-10-16+2 \\
-5+0+3
\end{bmatrix} = \begin{bmatrix}
-24 \\
-2
\end{bmatrix}
$$
This is a 2x2, probably inverible matrix, so lets invert it instead of row operations:
$$
(A^TA)^{-1} = \space \frac{1}{156}\begin{bmatrix}
10 & -8 \\
-8 & 12
\end{bmatrix}
$$
$$
(A^TA)^{-1}A^Tb= \frac{1}{56}\begin{bmatrix}
10 & -8 \\
-8 & 12
\end{bmatrix} \begin{bmatrix}
-24 \\
-2
\end{bmatrix}
$$
$$
=\frac{1}{56}\begin{bmatrix}
-240+16 \\
192-24
\end{bmatrix}
$$
$$
\frac{1}{56} \begin{bmatrix}
224 \\
168
\end{bmatrix} = \begin{bmatrix}
4 \\
3
\end{bmatrix}
$$

# #6
**Pretty much just the same as above**
![[meta/images/Pasted image 20250407150504.png]]

$$
A^T = \begin{bmatrix}
1 & 1 & 1 & 1 & 1 & 1 \\
1 & 1 & 1 & 0 & 0 & 0 \\
0 & 0 & 0 & 1 & 1 & 1 \\
\end{bmatrix}
$$
$$
A^TA = \begin{bmatrix}
6 & 3 & 3 \\
3 & 3 & 0 \\
3 & 0 & 3
\end{bmatrix}
$$

# #10
# #12
# #14
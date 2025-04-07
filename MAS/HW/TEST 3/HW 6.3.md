**2, 4, 6, 8, 10, 12, 14 pp 374**
# #2
![[meta/images/Pasted image 20250331210651.png|550]]
Because $\vec{u}_1, \dots , \vec{u_4}$ is a orthogonal set, I can just projeect v onto every $u$.
$$
\frac{v \cdot u_{1}}{u_{1} \cdot u_{1}}u_{1}
=\frac{4+10-2+2}{7}u_{1} = 2\begin{bmatrix}
1 \\
2 \\
1 \\
1
\end{bmatrix} = \begin{bmatrix}
2 \\
4 \\
2 \\
2
\end{bmatrix} = \hat{v}
$$
$$
v - \hat{v} = \begin{bmatrix}
4 \\
5 \\
-2 \\
2
\end{bmatrix} - \begin{bmatrix}
2 \\
4 \\
2 \\
2
\end{bmatrix} = \begin{bmatrix}
2 \\
1 \\
-4 \\
0
\end{bmatrix}
$$
I can check the answer by ensuring it is linearly dependent with $\vec{u}_2, \dots , \vec{u_4}$
$$
v = \begin{bmatrix}
2 \\
4 \\
2 \\
2
\end{bmatrix} + \begin{bmatrix}
2 \\
1 \\
-4 \\
0\end{bmatrix}
$$
$$
\begin{bmatrix}
2
\end{bmatrix}
$$

# #4
**Verify $\vec{u}_1, \dots , \vec{u_2}$ is orthogonal, then find the orthogonal projection y onto it** 
![[meta/images/Pasted image 20250401215218.png]]
Pretty much the same as above, except now im projecting onto 2 vectors simultaneously:
$$
\begin{align}
y \cdot u_{1} = 3 \\
y \cdot u_{2} = 5 \\
u_{1}^{2} = 2 \\
u_{2} ^{2} = 2
\end{align}
$$
$$
\hat{y}=\frac{3}{2}u_{1} + \frac{5}{2}u_{2} = \begin{bmatrix}
1.5 \\
1.5 \\
0
\end{bmatrix}
+\begin{bmatrix}
-2.5 \\
2.5 \\
0
\end{bmatrix} = \begin{bmatrix}
1 \\
4 \\
0
\end{bmatrix}
$$

# #6
**Same as above**
![[meta/images/Pasted image 20250401215849.png]]


$$
\begin{align}
y \cdot u_{1} = -19 \\
y \cdot u_{2} = 5 \\
u_{1}^{2} = 18 \\
u_{2}^{2} = 2
\end{align}
$$
ew  I do not want to work with those numbers
$$
-\frac{19}{18}\begin{bmatrix}
-4 \\
-1 \\
1
\end{bmatrix}+\frac{5}{2}
\begin{bmatrix}
0 \\
1 \\
1
\end{bmatrix}
$$
$$
=\begin{bmatrix}
38 / 9 \\
19 / 18 \\
- 19 / 18
\end{bmatrix}
+\begin{bmatrix}
0 \\
5 / 2 \\
5 / 2
\end{bmatrix}
$$

# #8
**Find the projection of y onto W given by the $u$s **
![[meta/images/Pasted image 20250401222924.png]]
$$
\begin{align}
y \cdot u_{1} = 6 \\
y \cdot u_{2} = 7 \\
u_{1} ^{2} =26 \\
u_{2}^{2} = 3
\end{align}
$$

# #10
# #12
# #14
**2, 6, 8, 10, 14, 16**

# 2
![[meta/images/Pasted image 20250312153955.png]]
$$
\begin{bmatrix}
7+2 & 3 \\
3 & -1+2
\end{bmatrix}=\begin{bmatrix}
9 & 3 \\
3  & 1
\end{bmatrix}
$$
We can see that there is a free variable which means that it was an eigenvalue

# 6
![[meta/images/Pasted image 20250312154138.png]]
$$
\begin{bmatrix}
2 & 6 & 7 \\
3 & 2 & 7 \\
5 & 6 & 4
\end{bmatrix}\begin{bmatrix}
1 \\
-2 \\
1
\end{bmatrix}=\begin{bmatrix}
2-12+7 \\
3-4+7 \\
5-12+4
\end{bmatrix}
$$
$$
=\begin{bmatrix}
-3 \\
6 \\
-3
\end{bmatrix}=-3\vec{v},\space\space\space\space \lambda=-3
$$

# #8
![[meta/images/Pasted image 20250312154517.png]]

$$
\begin{bmatrix}
1-3 & 2 & 2 \\
3 & -2-3 & 1 \\
0 & 1 & 1-3
\end{bmatrix}=\begin{bmatrix}
-2 & 2 & 2 \\
3 & -5 & 1 \\
0 & 1 & -2
\end{bmatrix}
$$
$$
\sim 
\begin{bmatrix}
-1 & 1 & 1 \\
3 & -5 & 1 \\
0 & 1 & -2
\end{bmatrix} \sim 
\begin{bmatrix}
-1 & 1 & 1 \\
0 & -2 & 4 \\
0 & 1 & -2
\end{bmatrix}
$$
We can see there is a free variable
$$
\sim \begin{bmatrix}
-1 & 1 & 1 \\
0 & 1 & -2 \\
0 & 0 & 0
\end{bmatrix} \sim
\begin{bmatrix}
-1 & 0 & 3 \\
0 & 1 & -2 \\
0 & 0 & 0
\end{bmatrix}
$$
so the null space is:
$$
\vec{x}=\begin{bmatrix}
3x_{3} \\
2x_{3} \\
1
\end{bmatrix}
\implies
\text{Span}\left\{
\begin{bmatrix}
3 \\
2 \\
1
\end{bmatrix}
\right\}
 $$

# #10
Find the eigenspace

![[meta/images/Pasted image 20250312155023.png]]

$$
\begin{bmatrix}
6 & -9 \\
4 & -6
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & -\frac{3}{2} \\
4 & -6
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & -\frac{3}{2} \\
0 & 0
\end{bmatrix}
$$
$$
\vec{x}=\begin{bmatrix}
\frac{3}{2}x_{2} \\
x_{2}
\end{bmatrix}=x_{2}\begin{bmatrix}
\frac{3}{2} \\
1
\end{bmatrix}
$$
$$
\implies \text{Span}\left\{
\begin{bmatrix}
\frac{3}{2}  \\
1
\end{bmatrix}
\right\}
$$

# 14
![[meta/images/Pasted image 20250326123904.png]]
**Find the eigenspace**

$$
\begin{bmatrix}
7 & -1 & 3 \\
-1 & 7 & 3 \\
6 & 6 & 6
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 1 & 1 \\
-1 & 7 & 3 \\
7 & -1 & 3 \\
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 1 & 1 \\
0 & 8 & 4 \\
0 & -8 & -4 \\
\end{bmatrix} \sim \begin{bmatrix}
1 & 1 & 1 \\
0 & 1 & .5 \\
0 & 0 & 0 
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 0 & .5 \\
0 & 1 & .5 \\
0 & 0 & 0 
\end{bmatrix}
$$
$$
\text{Span}\left\{
\begin{bmatrix}
-.5 \\
-.5 \\
1
\end{bmatrix}
\right\}
$$

# #16
![[meta/images/Pasted image 20250326125454.png]]
**Find the eigenspace**
$$
\begin{bmatrix}
-1 & 0 & 2 & 0 \\
1 & -1 & 1 & 0 \\
0 & 1 & -3 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
$$ r_{2}\mathrel{+}=r_{1}\implies
\begin{bmatrix}
-1 & 0 & 2 & 0 \\
0 & -1 & 3 & 0 \\
0 & 1 & -3 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
$$
r_{3}\mathrel{+}=r_{2}
\begin{bmatrix}
-1 & 0 & 2 & 0 \\
0 & -1 & 3 & 0 \\
0 & 0 & 0 & 0 \\
0 & 0 & 0 & 0
\end{bmatrix}
$$
$$
\begin{align}
x_{1}=2x_{3} \\
x_{2}=3x_{3} \\
x_{3}=x_{3} \\
x_{4}=x_{4}
\end{align} \implies \begin{bmatrix}
2 \\
3 \\
1 \\
0
\end{bmatrix}x_{3} + \begin{bmatrix}
0 \\
0 \\
0 \\
1
\end{bmatrix}x_{4}
$$
And vector in the above form will by scaled by multiplication with the original matrix A.
**1.2 pp 23: 2, 4, 10, 12,**


# #2
Determine which matrices are in reduced echelon and which are only in echelon.
$$
A= \begin{bmatrix}
1 & 1 & 0 & 1 \\
0 & 0 & 1 & 1  \\
0 & 0 & 0 & 0
\end{bmatrix}
\space 
B=\begin{bmatrix}
1 & 0 & 0 & 0 \\
0 & 1 & 0 & 0 \\
0 & 0 & 1 & 1
\end{bmatrix}
\space 
$$
$$
C= \begin{bmatrix}
1 & 0 & 0 & 0 \\
1 & 0 & 0 & 0
\end{bmatrix}
\space 
D=\begin{bmatrix}
0 & 1 & 1 & 1 & 1 \\
0 & 0 & 2 & 2 & 2 \\
0 & 0 & 0 & 0 & 3 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
\space 
$$
Echelon:  D
Reduced Echelon: A, B
Neither: C

# #4
Row Reduce the matrices. Circle the pivot positions i the final matrix.
$$
\begin{bmatrix}
1 & 3 & 5 & 7 \\
3 & 5 & 7 & 9 \\
5 & 7 & 9 & 1
\end{bmatrix} \sim \begin{bmatrix}
1 & 3 & 5 & 7 \\
0 & -4 & -8 & -12 \\
0 & -8 & 16 & -34
\end{bmatrix} \sim 
\begin{bmatrix}
1 & 3 & 5 & 7 \\
0 & -4 & -8 & -12 \\
0 & 0 & 0 & -10
\end{bmatrix} \sim \begin{bmatrix}
4 & 0 & -4 & -8 \\
0 & -4 & -8 & -12 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 0 & -1 & 0 \\
0 & -1 & -2 & 0 \\
0 & 0 & 0 & 1
\end{bmatrix}
$$
![[meta/images/Screenshot from 2025-02-25 14-08-22.png]]

# 10
test
Find the general solutions of the systems whose augmented matrices are given in Exercises 7–14.

$$
\begin{bmatrix}
1 & -2 & -1 & 3 \\
3 & -6 & -2 & 2
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & -2 & -1 & 3 \\
0 & 0 & 1 & -7
\end{bmatrix} \sim \begin{bmatrix}
1 & -2 & 0 & -4 \\
0 & 0 & 1 & -7
\end{bmatrix}
$$
$$
\vec{x} = \begin{bmatrix}
x_{2}-4 \\
x_{2} \\
-7
\end{bmatrix}  \implies \left \{\begin{align}
x_{1} = x_{2} -4 \\
x_{2} = \text{free} \\
x_{3} = -7
\end{align}
\right.
$$

# #12

$$
\begin{bmatrix}
1 & -7 & 0 & 6 & 5 \\
0 & 0 & 1 & -2 & -3 \\
-1 & 7 & -4 & 2 & 7
\end{bmatrix}
$$
$$
\sim \underbrace{ \begin{bmatrix}
1 & -7 & 0 & 6 & 5 \\
-1 & 7 & -4 & 2 & 7\\
0 & 0 & 1 & -2 & -3
\end{bmatrix} }_{ r_{2} \leftrightarrow r_{3} } \sim \underbrace{ \begin{bmatrix}
1 & -7 & 0 & 6 & 5 \\
0 & 0 & -4 & 8 & 12 \\
0 & 0 & 1 & -2 & -3
\end{bmatrix} }_{ r_{2}+=r_{1} } \sim \underbrace{ \begin{bmatrix}
1 & -7 & 0 & 6 & 5 \\
0 & 0 & -4 & 8 & 12 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix} }_{ 4r_{3}+= r_{2}}
$$
$$
\sim \begin{bmatrix}
1 & -7 & 0 & 6 & 5 \\
0 & 0 & 1 & -2 & -3 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix} \implies \text{Solution} 
\left\{

\begin{flalign}
&x_{1}=5+x_{2}-x_{4} \\
&x_{2}= \text{free}\\
&x_{3} = 2x_{4}-3 \\
&x_{4}= \text{free}
\end{flalign}
\right.
$$








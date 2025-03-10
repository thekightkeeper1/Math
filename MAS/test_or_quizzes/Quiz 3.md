# 1 Calculate the determinant

$$
\begin{vmatrix}
1 & 1 & 1 & 1 & 1 \\
1 & 2 & 2 & 2 & 2 \\
1 & 2 & 3 & 3 & 3 \\
1 & 2 & 3 & 4 & 4 \\
1 & 2 & 3 & 4 & 5
\end{vmatrix}
$$

# 12. Describe $\text{Nul A}$ by listing the spanning vectors.
$$
A = \begin{bmatrix}
1 & 5 & -4 & -3 & 1 \\
0 & 1 & -2 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

$$
A = \begin{bmatrix}
1 & 5 & -4 & -3 & 1 \\
0 & 1 & -2 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$
Already in row echelon form, so the free variable is $x_{3},x_{4},x_{5}$  since it doesnt have a pivot in its column.
To solve for the null space we augment this with $\vec{0}$ on the end.
$$
\begin{bmatrix}
1 & 5 & -4 & -3 & 1 & | & 0 \\
0 & 1 & -2 & 1 & 0& | & 0 \\
0 & 0 & 0 & 0 & 0& | & 0
\end{bmatrix}
$$
$$
r_{1} = r_{1}-5r_{2}
\sim \begin{bmatrix} 
x_{1} & x_{2} & x_{3} & x_{4} & x_{5} & | & c\\
1 & 0 & 6 & -8 & 1 & | & 0 \\
0 & 1 & -2 & 1 & 0& | & 0 \\
0 & 0 & 0 & 0 & 0& | & 0
\end{bmatrix}
$$
I like to get reduced echelon form that way I dont have to do any equation substitutions. Also, I have the x above the colmns so its easier to make equationss

$$
\begin{align}
x_{1}+6x_{3}-8x_{4}+x_{5} =0\\
x_{2}-2x_{3}+x_{4}=0
\end{align}
$$
$$
\implies \vec{x}=\begin{bmatrix}
-6x_{3}+8x_{4}-x_{5} \\
2x_{3}-x_{4} \\
x_{3} \\
x_{4} \\
x_{5}
\end{bmatrix}
$$
Notice i flip the sign when i make the $\vec{x}$ cause I skip the step of moving the $x$ to the other side of teh equation.
$$
=x_{3}\begin{bmatrix}
-6 \\
2 \\
1 \\
0 \\
0
\end{bmatrix} + x_{4}
\begin{bmatrix}
8 \\
-1 \\
0 \\
1 \\
0
\end{bmatrix}+x_{5}
\begin{bmatrix}
-1 \\
0 \\
0 \\
0 \\
1
\end{bmatrix}
$$

If you want to check your answer, just add the basis vectors up, and multiply with $A$, the original matrix.
$$
\vec{v}_{1}+\vec{v}_{2}+\vec{v}_{3}=
\begin{bmatrix}
1 \\
1 \\
1 \\
1 \\
1
\end{bmatrix}
$$

$$
A\vec{v}=
\begin{bmatrix}
1 & 5 & -4 & -3 & 1 \\
0 & 1 & -2 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
\begin{bmatrix}
1 \\
1 \\
1 \\
1 \\
1
\end{bmatrix}=\begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

So the answer is definitely correct
# $V$ does not span but it is a basis
Let $\vec{v}_1, \dots , \vec{v_n}$ be linearly independent vectors in $\mathbb{R}^4$. 
That is, they look like: $\begin{bmatrix}a \\ b \\ c \\ d\end{bmatrix}$. And at most $n$=4
These vectors exist in $\mathbb{R}^4$ and their span can never equal $\mathbb{R}^3$ because of that.
However, lets say the vetors are in the form of:
$$
\begin{bmatrix}
a \\
b \\
c \\
0
\end{bmatrix}
$$
In this case the span of the vectors would  look identical to $\mathbb{R}^3$. And so you can use it as a basis for $\mathbb{R}^3$
For example:

$$
\vec{v}_1, \dots , \vec{v_3}=\begin{bmatrix}
1 \\
0 \\
0 \\
0
\end{bmatrix},
\begin{bmatrix}
0 \\
1 \\
0 \\
0
\end{bmatrix},
\begin{bmatrix}
0 \\
0 \\
1 \\
0
\end{bmatrix}
\space\space\space\space\space\space 
\vec{x}=\begin{bmatrix}
1 \\
2 \\
3 \\
0
\end{bmatrix}
$$

We can see that
$$
\begin{align}
\vec{x} \in \text{Span}\left\{
\vec{v}_1, \dots , \vec{v_3}
\right\} \\
\vec{x}=v_{1}+2v_{2}+3v_{3} \\
\implies \left[\mathbf{x}\right]_{\mathcal{V}} = \begin{bmatrix}
1 \\
2 \\
3
\end{bmatrix}
\end{align}
$$

And what is interesting is that the matrix which represents $\left[\mathbf{x}\right]_{\mathcal{V}}$ *Does* exist in $\mathbb{R}^3$, although nothing up to this point has.
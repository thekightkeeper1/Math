**pp 219 2, 4, 6, 10, 12, 14**

# #2
**Determine if $\vec{w}$ in $\text{Nul A}$**  where
$$\vec{w} = \begin{bmatrix}5 \\ -3 \\ 2\end{bmatrix}
\space\space\space\space\space\space\space\space\space\space\space\space\space 
A = \begin{bmatrix}
5 & 21 & 19 \\
13 & 23 & 2  \\
8 & 14 & 1
\end{bmatrix}
$$

$$
A\vec{w}=\begin{bmatrix}
25-63+38 \\
65-69+4 \\
40-42+2
\end{bmatrix} = \begin{bmatrix}
0 \\
0 \\
0
\end{bmatrix}
$$

$\vec{w}$ $\in$ $\text{Nul A}$

# # 4, 6
**Describe the span of $\text{Nul A}$**
##  #4
$$
A = \begin{bmatrix}
1 & -6 & 4 & 0 \\
0 & 0 & 2 & 0
\end{bmatrix}
$$
First get to [[RREF]]
$$
\sim \begin{bmatrix}
1 & -6 & 0 & 0 \\
0 & 0 & 1 & 0
\end{bmatrix}\space\space\space 
\begin{align}
&r_{2}\mathrel{*}=3 \\
&r_{1}\mathrel{+}=-4r_{2}
\end{align}
$$
Then we can construct our spanning vectors
$$
\vec{x}=\begin{bmatrix}
6x_{2} \\
x_{2} \\
0 \\
x_{4}
\end{bmatrix} = x_{2}\begin{bmatrix}
6 \\
1 \\
0 \\
0
\end{bmatrix} + x_{4} \begin{bmatrix}
0 \\
0 \\
0 \\
1
\end{bmatrix}
$$
Note that if you didnt get to RREF first, then you would get:
$$
\vec{x} = \begin{bmatrix}
6x_{2} - 4x_{3} \\
x_{2} \\
0 \\
x_{4}
\end{bmatrix} = x_{2}\begin{bmatrix}
6 \\
1 \\
0 \\
0
\end{bmatrix} + x_{3} \begin{bmatrix}
-4 \\
0 \\
0 \\
0
\end{bmatrix} + 
x_{4} \begin{bmatrix}
0 \\
0 \\
0 \\
1
\end{bmatrix}
$$
Since $x_{3}$ = 0, we that second term would be 0 and were left with the same result.

## #6

$$
A = \begin{bmatrix}
1 & 5 & -4 &  -3 & 1 \\
0 & 1 & -2 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$
Get to RREF:
$$
\sim \begin{bmatrix}
x_{1} & x_{2} & x_{3} & x_{4} & x_{5} \\
1 & 0 & 6 &  -8 & 1 \\
0 & 1 & -2 & 1 & 0 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$
$$
\implies \vec{x}=\begin{bmatrix}
-6x_{3} + 8x_{4} - x_{5} \\
2x_{3}-x_{4} \\
x_{3} \\
x_{4} \\
x_{5}
\end{bmatrix} = x_{3}\underbrace{ \begin{bmatrix}
-6 \\
2 \\
1 \\
0 \\
0
\end{bmatrix} }_{ \vec{v}_{1} } + x_{4} \underbrace{ \begin{bmatrix}
8 \\
-1 \\
0 \\
1 \\
0
\end{bmatrix} }_{ \vec{v}_{2} } + x_{5} \underbrace{ \begin{bmatrix}
-1 \\
0 \\
0 \\
0 \\
1
\end{bmatrix}}_{ \vec{v}_{3} }
$$
And the answer is:
$$
\text{Span}\{v\}
$$
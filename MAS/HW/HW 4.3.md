**4.3 pp 228:**
**4, 6, 8, 12, 14, 16, 20**

# 4-8
**Determine sets are bases for $\mathbb{R}^3$**
**Of the sets that are not, determine a linearly independent subset.**

## 4
$$
\begin{bmatrix}
2 \\
-2 \\
1
\end{bmatrix} , \begin{bmatrix}
1 \\
-3 \\
2
\end{bmatrix} , \begin{bmatrix}
-7 \\
5 \\
4
\end{bmatrix}
$$

So we need to find the pivot columns of the matrix, and that tells us which columns are bases.

$$
\begin{bmatrix}
2  & 1 & -7 \\
-2  & -3 & 5\\
1 & 2 & 4
\end{bmatrix}
\sim 
\begin{bmatrix}
1 & 2 & 4\\
2  & 1 & -7 \\
-2  & -3 & 5
\end{bmatrix} \sim 
\begin{bmatrix}
1 & 2 & 4\\
0  & -3 & -15 \\
0  & 1 & 13
\end{bmatrix}
$$
$$
\sim  \begin{bmatrix}
1 & 2 & 4\\
0  & 1 & 13\\
0  & -3 & -15
\end{bmatrix} 
$$ 
At this point we can see there will be a pivot in every column, and thus the entire set forms a basis.

## 6
$$
\begin{bmatrix}
1 \\
2 \\
-3
\end{bmatrix} ,\begin{bmatrix}
-4 \\
-5 \\
6
\end{bmatrix}
$$
Although I can already see this set is lin. indep, I know it is not a base for $\mathbb{R}^3$ because you need 3 vectors to span $\mathbb{R}^3$

## 8
$$
\begin{bmatrix}
1 \\
-4 \\
3
\end{bmatrix}
, \begin{bmatrix}
0 \\
3 \\
-1
\end{bmatrix}
, \begin{bmatrix}
3 \\
-5 \\
4
\end{bmatrix}
, \begin{bmatrix}
0 \\
-2 \\
2
\end{bmatrix}
$$

First we make the matrix
$$
\begin{bmatrix}
1 & 0 & 3 & 0 \\
-4 & 3 & -5 & 2 \\
3 & -1 & 4 & -2
\end{bmatrix} \sim 
\begin{bmatrix}
1 & 0 & 3 & 0 \\
0 & 3 & 7 & 2 \\
0 & -1 & -5 & -2
\end{bmatrix} \sim 
\begin{bmatrix}
1 & 0 & 3 & 0 \\
0 & -1 & -5 & -2 \\
0 & 3 & 7 & 2 \\
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 0 & 3 & 0 \\
0 & -1 & -5 & -2\\
0 & 3 & 7 & 2 
\end{bmatrix} \sim 
\begin{bmatrix}
1 & 0 & 3 & 0 \\
0 & -1 & -5 & -2\\
0 & 0 & -8 & -4
\end{bmatrix}
$$
The first 3 have pivot columns, so these span $\mathbb{R}^3$
$$
\text{Span}\left\{  
\begin{bmatrix}
1 \\
-4 \\
3
\end{bmatrix}
, \begin{bmatrix}
0 \\
3 \\
-1
\end{bmatrix}
, \begin{bmatrix}
3 \\
-5 \\
4
\end{bmatrix}
\right\}
$$

# 11 (just for fun)
**Find a basis for the set of vectors in $\mathbb{R}^3$ in the plane $x + 2y + z = 0$**

Lets say that
$$
H = \left\{ 
\begin{bmatrix}
x \\
y \\
z
\end{bmatrix}\space :\space x + 2y + z =0
\right\} 
$$

Since we know that tis a plane, I have 2 free variables. Let them be $s=y, t=z$
$x=-2y-z \implies x=-2s-t$
$$
\left\{\begin{flalign}
&x=-2s-t\\
&y=s \\
&z=t
\end{flalign}\right.
$$
And that right there is our $\vec{x}$. 
$$
\begin{bmatrix}
-2s -t \\
s \\
t
\end{bmatrix} = s\begin{bmatrix}
-2 \\
1 \\
0
\end{bmatrix} + t \begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}
$$

# 12
**Find a basis for the line $y=5x$**


Well, all vectors on that line are linearly dependent with each other. All I need is a single vector
$$
\begin{bmatrix}
1 \\
5
\end{bmatrix}
$$

we can see that $5=5(1)$

# 14
**A $\sim$ B. So find $\text{Col A}$, $\text{Row B}$ and $\text{Nul A}$**
$$
A=\begin{bmatrix}
1 & 2 & -5 & 11 & -3 \\
2 & 4 & -5 & 15 & 2 \\
1 & 2 & 0 & 4 & 5 \\
3 & 6 & -5 & 19 & -2
\end{bmatrix}\space\space\space B=\begin{bmatrix}
1 & 2 & 0 & 4 & 5 \\
0 & 0 & 5 & -7 & 8 \\
0 & 0 & 0 & 0 & -9 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$


The pivot columns and rows are determined from B. Since they are row equivalent they have the same spaces.
$$\text{Col A}= \text{Span}\left\{ c_{1},c_{2},c_{3}\right\}$$
$$
\text{Row A} = \text{Span}\left\{
r_{1},r_{2},r_{3}
\right\}
$$
For $\text{Nul A}$ we need to reduce B to [[MAS/Vocab/RREF]].
$$
B \sim \begin{bmatrix}
1 & 2 & 0 & 4 & 0 \\
0 & 0 & 5 & -7 & 0 \\
0 & 0 & 0 & 0 & -9 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix} \sim \begin{bmatrix}
x_{1} & x_{2} & x_{3} & x_{4} & x_{5} \\
1 & 2 & 0 & 4 & 0 \\
0 & 0 & 1 & -\frac{7}{5} & 0 \\
0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

$$
\vec{x}=
\begin{bmatrix}
-2x_{2} - 4x_{4} \\
x_{2} \\
\frac{7}{5}x_{4} \\
x_{4} \\
x_{5}
\end{bmatrix} = x_{2}\begin{bmatrix}
-2 \\
1 \\
0 \\
0 \\
0
\end{bmatrix} + x_{4}\begin{bmatrix}
-4 \\
0 \\
\frac{7}{5} \\
1 \\
0
\end{bmatrix} x_{5} \begin{bmatrix}
0 \\
0 \\
0 \\
0 \\
1
\end{bmatrix}
$$
Let the above vectors that are in linear combination be $\vec{v}_1, \dots , \vec{v_3}$
$$
\text{Nul A} = \text{Span}\left\{
\vec{v}_1, \dots , \vec{v_3}
\right\}
$$

# 16
**Find a basis for the space spanned by the given vectors, $\vec{v}_1, \dots , \vec{v_5}$** 

$$
\begin{bmatrix}
1 \\
0 \\
0 \\
1
\end{bmatrix},
\begin{bmatrix}
-2 \\
1 \\
-1 \\
1
\end{bmatrix}
\begin{bmatrix}
6 \\
-1 \\
2 \\
-1
\end{bmatrix}
,
\begin{bmatrix}
5 \\
-3 \\
3 \\
-4 \\
\end{bmatrix}
,
\begin{bmatrix}
0 \\
3 \\
-1 \\
1
\end{bmatrix}
$$

Lets find the pivot columns of the EF matrix
$$
\begin{bmatrix}
1 & -2 & 6 & 5 & 0 \\
0 & 1 & -1 & -3 & 3 \\
0 & -1 & 2 & 3 & -1 \\
1 & 1 & -1 & -4 & 1
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & -2 & 6 & 5 & 0 \\
1 & 1 & -1 & -4 & 1\\
0 & 1 & -1 & -3 & 3 \\
0 & -1 & 2 & 3 & -1 \\
\end{bmatrix} \sim 
\begin{bmatrix}
1 & -2 & 6 & 5 & 0 \\
0 & 3 & -7 & -9 & 1\\
0 & 1 & -1 & -3 & 3 \\
0 & -1 & 2 & 3 & -1 \\
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & -2 & 6 & 5 & 0 \\
0 & -1 & 2 & 3 & -1 \\
0 & 3 & -7 & -9 & 1\\
0 & 1 & -1 & -3 & 3 \\
\end{bmatrix} \sim \begin{bmatrix}
1 & -2 & 6 & 5 & 0 \\
0 & -1 & 2 & 3 & -1 \\
0 & 0 & -1 & 0 & -2\\
0 & 0 & 1 & 0 & 2 \\
\end{bmatrix}
$$
$$
\sim 
\begin{bmatrix}
1 & -2 & 6 & 5 & 0 \\
0 & -1 & 2 & 3 & -1 \\
0 & 0 & -1 & 0 & -2\\
0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$

So the pivot columns are $c_{1}$, $c_{2}$, $c_{3}$.

# 20
**Given $v_{1}-3v_{2}+5v_{3}=0$, find the basis of:**
$$
H = \text{Span}\left\{
\vec{v}_1, \dots , \vec{v_3}
\right\}
$$

$$
v_{1}=\begin{bmatrix}
7 \\
4 \\
-9 \\
-5
\end{bmatrix}, v_{2} = \begin{bmatrix}
4 \\
-7 \\
2 \\
5
\end{bmatrix}, v_{3} = \begin{bmatrix}
1 \\
-5 \\
3 \\
4
\end{bmatrix}
$$

We know from that equation that any of the vectors is a linear combo of the other 2
$$
v_{1}=3v_{2}-5v_{3}
$$
So we only need to determine the dependence of $v_{2}$ and $v_{3}$. 
$v_{2}-4v_{3}\neq 0$. However, the first row would cancel. So we know there is no $c$ which would satisfy linear dependence.

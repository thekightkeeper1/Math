# Determinant and row operations
- if E swaps rows then
	- |A| = -|EA|
	- negative
- If E const row multiplication then:
	- $\det A = \frac{1}{c}\det EA$
- If $E$ adds $cr_{n}$ to another row,
	- Then $\det A = \det EA$

# Nul, Col, row
if $A \sim B$ 
then $\text{Col A} = \text{Col B}$
Aka, row operations dont affect the vector space

# Dimension of a vector space
The # basis vectors $= \dim V$
$\dim \text{Col A} = \dim \text{Row A} = n$
 Sometimes you will see $\text{Col A}$ written as $\text{Range } A$
$n$ is the rank.
$\text{columns} -n =\text{Nullity} A$
Where $\text{Nullity}$ is the number of basis vectors in $\text{Nul A}$

# Change of basis
Given $\left\{ \vec{b}_1, \dots , \vec{b_n} \right\} \land \left\{ \vec{c}_1, \dots , \vec{c_n} \right\}$ are basis for $V$.
$\left[\mathbf{x}\right]_{\mathcal{B}} ={P \atop B \leftarrow C} \left[\mathbf{x}\right]_{\mathcal{C}}$
Where $P = \left[ \left[\,\mathbf{b}_1\,\right]_{\mathcal{C}},\dots \left[\,\mathbf{b}_2\,\right]_{\mathcal{C}} \right]$

 
e.g
$\vec{b}_{1} = -\vec{c}_{1}+4\vec{c}_{2}, \vec{b}_{2} = 5\vec{c}_{1}-3\vec{c}_{2}$
a) Find ${P \atop \mathcal{C} <- \mathcal{B}}$ 
b) find $\left[\mathbf{x}\right]_{\mathcal{C}}$ for $\vec{x} = 5\vec{b}_{1} + 3\vec{b}_{2}$

## Solution
$$
{P \atop \mathcal{C} \leftarrow \mathcal{B}} = [\vec{b}_{1}, \vec{b}_{2}] = \begin{bmatrix}
-1 & 5 \\
4 & -3
\end{bmatrix}
$$
$$
\left[\mathbf{x}\right]_{\mathcal{C}} = P\vec{x} = \begin{bmatrix}
-1 & 5 \\
4 & -3
\end{bmatrix}
\begin{bmatrix}
5 \\
3
\end{bmatrix}
$$
$$
=\begin{bmatrix}
-5+15 \\
20-9
\end{bmatrix}
=
\begin{bmatrix}
10 \\
11
\end{bmatrix}
$$ 

# Q 14
$$
A = \begin{bmatrix}
1 & 2 & -5 & 11 & -3 \\
2 & 4 & -5 & 15 & 2  \\
 1 & 2 & 0 & 4 & 5 \\
3 & 6 & -5 & 19 & -2
\end{bmatrix}
$$

$$
B=
\begin{bmatrix}
1 & 2 & 0 & 4 & 3 \\
0 & 0 & 5 & -7 & 8 \\
0 & 0 & 0 & 0 & -9 \\
0 & 0 & 0 & 0 & 0  \\
\end{bmatrix}

$$
Give $A \sim B$
Find a basis of $\text{Nul A}$,  $\text{Col A}$ and $\text{Row A}$


## Solution:
### Null space:
To get null space, we need to find the free variables and write the $\vec{x}$ in terms of $x_{n}\vec{v}_{n}$

$$
B \sim \begin{bmatrix}
1 & 2 & 0 & 4 & 3 \\
0 & 0 & 5 & -7 & 8 \\
0 & 0 & 0 & 0 & -9 \\
0 & 0 & 0 & 0 & 0  \\
\end{bmatrix}
r_{3}\mathrel{*}=-\frac{1}{9}
$$
$$
 \sim \begin{bmatrix}
1 & 2 & 0 & 4 & 0 \\
0 & 0 & 5 & -7 & 0 \\
0 & 0 & 0 & 0 & 1 \\
0 & 0 & 0 & 0 & 0  \\
\end{bmatrix}
{r_{2}\mathrel{+}=-8r_{3} \atop r_{1} \mathrel{+}= -3r_{3}}
$$


Assuming $B\vec{x} = 0$ we get:
$$
\vec{x}= \begin{bmatrix}
-2x_{2}-4x_{4} \\ 
x_{2} \\
\frac{7}{5}x_{4} \\
x_{4} \\
0
\end{bmatrix}
=x_{2}\begin{bmatrix}
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
\end{bmatrix}
$$

And the span of the 2 vectors on the right are the null space
Notice that we just don't use $x_{5}$ at all. It must always be 0.

### Row, Col spaces
B has $1, 3, 5$ as pivot columns.
$$
\text{Col A} = \text{Span}\left\{
\vec{a}_{1},\vec{a}_{3},\vec{a}_{5}
\right\}
$$
The row space has the same dimension as the columns space, according the that rank theorm. Its just that instead of looking at what columns have pivots, we look at what rows have pivots. That would be:
$$
r_{1},r_{2},r_{3}
$$
$$
\implies \text{Row A} = \text{Span}\left\{
\vec{r}_{1},\vec{r}_{2},\vec{r}_{3}
\right\}
$$



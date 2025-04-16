**4.5: 2, 4, 6, 10, 12 pp 247**

# 2,6
**For each subspace, 
	a) find the basis
	b) state the dimension**
## #2
$$2.\;\;\left\{{\left[\begin{array}{l}{4s}\\ {-3s}\\ {-t}\end{array}\right]}\colon s,t{\mathrm{~in~}}\mathbb{R}\right\}$$

$$
s
\begin{bmatrix}
4 \\
-3 \\
0
\end{bmatrix} + t \begin{bmatrix}
0 \\
0 \\
-1
\end{bmatrix}
$$
We can see $\vec{v}_{2} \land \vec{v}_{3}$ are lin indep. So they do form a basis.
$$
a)\space\space\space\space \left\{ \begin{bmatrix}
4 \\
-3 \\
0
\end{bmatrix}, \begin{bmatrix}
0 \\
0 \\
-1
\end{bmatrix}\right\} 
$$
$$
b)\space\space\space\space \text{Its dimension is 2}
$$


## #4
$${\textbf{4}}.\,\,\left\{{\left[\begin{array}{l}{a+b}\\ {2a}\\ {3a-b}\\ {-b}\end{array}\right]}\colon a,b\operatorname{in}\mathbb{R}\right\}$$

$$
=e
\begin{bmatrix}
1 & 1 \\
2 & 0 \\
3 & -1 \\
0 & -1
\end{bmatrix}
\begin{bmatrix}
a \\
b
\end{bmatrix}
$$
Those columns are linearly independent, so they form a 2 dimensional basis.

## #6
$${\textbf{6.}}\left\{{\left[\begin{array}{l}{3a+6b-c}\\ {6a-2b-2c}\\ {-9a+5b+3c}\\ {-3a+b+c}\end{array}\right]}:a,b,c\ {\mathrm{in}}\mathbb{R}\right\}$$


# #10
**Find the dimension of the following span**
$$
\text{Span}\left\{
\,\,\left[\begin{array}{c}{{1}}\\ {{-2}}\\ {{0}}\end{array}\right],\,\left[\begin{array}{c}{{-3}}\\ {{4}}\\ {{1}}\end{array}\right],\,\left[\begin{array}{c}{{-8}}\\ {{6}}\\ {{5}}\end{array}\right],\,\left[\begin{array}{c}{{-3}}\\ {{0}}\\ {{7}}\end{array}\right]
\right\}
$$
Lets row reduce to find the number of pivots, since that tells us the dimension
$$
\begin{bmatrix}
1 & -3 & -8 & -3 \\
-2 & 4 & 5 & 0 \\
0 & 1 & 5 & 7
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & -3 & -8 & -3 \\
0 & -2 & -11 & -6 \\
0 & 1 & 5 & 7
\end{bmatrix}
$$ 
There is a pivot in row 1, and with $r_{3}$-=$\frac{1}{2}r_{2}$ I would have a pivot in row 2 and row 3.  Thats 3 total pivots and so ==the span is 3 dimensional==.

# #12
**Determine the dimension of:**
- $\text{Nul A}$
- $\text{Row A}$
- $\text{Col A}$

$$
A=\begin{bmatrix}
1 & 3 & -4 & 2 & -1 & 6 \\
0 & 0 & 1 & -3 & 7 & 0  \\
0 & 0 & 0 & 1 & 4 & -3 \\
0 & 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$


It is in EF already, so we can easily see that it has 3 pivot columns. 
by the Rank Nullity Theorem.
rank($A$) + nullity($A$) = $n$
Where n is the number of columns.
$3 + x = 6\implies x=3$
- $\text{nullity}(A) = 3$
- $\text{dim}(\text{Row A}) = 3$
- $\text{dim}(\text{Col A}) = 3$

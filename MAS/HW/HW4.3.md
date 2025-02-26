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

# 12
**Find a basis for the set of vectors in $\mathbb{R}^3$ in the plane $x + 2y + z = 0$**
Well, I can define another equation from this one
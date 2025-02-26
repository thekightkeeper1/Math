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
\end{bmatrix} \sim 
\begin{bmatrix}
1 & 2 & 4\\
0  & 1 & 13\\
0  & -1 & -5
\end{bmatrix} \sim \begin{bmatrix}
1 & 2 & 4\\
0  & 1 & 13\\
0  & 0 & -5
\end{bmatrix}
$$ 


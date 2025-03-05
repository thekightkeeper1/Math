# 3.1 pg 177
Calculate $Det A$ using cofactor expansion. If possible, choose a row/column that has the least number of operations to complete.

## #7
$$
\begin{bmatrix}
4 & 3 & 0 \\
6 & 5 & 2 \\
9 & 7 & 3
\end{bmatrix}
$$
### Solution:
$$
Det A = 4
$$

## #9
$$
\begin{vmatrix}
4 & 0 & 0 & 5 \\
1 & 7 & 2 & -5 \\
3 & 0 & 0 & 0 \\
8 & 3 & 1 & 7
\end{vmatrix}
$$
### Solution:
Start with row 3.

![[meta/images/Pasted image 20250304193336.png|406]]

$$
=+3 \begin{vmatrix}
0 & 0 & 5 \\
7 & 2 & -5 \\
3 & 1 & 7
\end{vmatrix}
$$
And continue to compute from there until you get the number:
$$
\det A = 15
$$

## #19

$$19.\ {\Biggl[}{\begin{array}{l l}{a}&{b}\\ {c}&{d}\end{array}}{\Biggr]},{\Biggl[}{\begin{array}{l l}{c}&{d}\\ {a}&{b}\end{array}}{\Biggr]}$$

### Solution
It swapped rows. 
You need to multiply the determinant by $-1$

## #20
$${\bf20.}\ \left[{\begin{array}{l l}{a}&{\ \ \ b}\\ {c}&{\ \ \ d}\end{array}}\right],\left[{\begin{array}{l l}{a}&{\ \ \ b}\\ {k c}&{\ \ \ k d}\end{array}}\right]$$

### Solution
$\det B$ is now $k$ times whatever $\det A$ was. 
So lets say that $\det A = 2$. This means that $\det B = 2k$.
If we wanted to get the determinant of the original matrix, matrix $A$, then we would have to multiply $\det B$ by $\frac{1}{k}$ .


#
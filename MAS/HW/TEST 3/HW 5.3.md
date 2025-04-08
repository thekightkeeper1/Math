**5.3 pp 295 2, 4, 6, 8, 12, 14, 16**
# #1
**Calculate $A^4$ given that $D=PDP^{-1}$**
![[meta/images/Pasted image 20250326165408.png]]
$$
P^{-1}=\begin{bmatrix}
3 & -7 \\
2 & 5
\end{bmatrix}
$$
$$
D^4 = \begin{bmatrix}
16 & 0 \\
0 & 1
\end{bmatrix}
$$
$$
PD^4 = \begin{bmatrix}
80 & 7 \\
32 & 48
\end{bmatrix} 
$$
$$
PD^4P^{-1} = 
\begin{bmatrix}
80 & 7 \\
32 & 48
\end{bmatrix}
\begin{bmatrix}
3 & -7 \\
2 & 5
\end{bmatrix}
$$
$$
=\begin{bmatrix}
240 +14 & -560 +35 \\
96+96 & -224+240
\end{bmatrix}
$$



# #4
![[meta/images/Pasted image 20250326194406.png|528]]
$$
\begin{bmatrix}
1 & 2 \\
1 & 1
\end{bmatrix}
\begin{bmatrix}
2^k & 0 \\
0 & (-2)^k
\end{bmatrix}
\begin{bmatrix}
-1 & 2 \\
1 & -1
\end{bmatrix}
$$

$$
=
\begin{bmatrix}
2^k & 2\times(-2)^{k} \\
2^k & (-2)^k
\end{bmatrix}
\begin{bmatrix}
-1 & 2 \\
1 & -1
\end{bmatrix}
$$
$$
=\begin{bmatrix}
-2^k+2\times(-2)^{k}  & 2^{k+1}-2\times(-2)^{k}\\
-2^k + (-2)^k & 2^{k+1}-(-2)^k
\end{bmatrix}
$$
$$
=\begin{bmatrix}
-2^k -(-2)^{k+1} & 2^{k+1}+(-2)^{k+1} \\
-2^k+ (-2)^k  & 2^{k+1}-(-2)^k
\end{bmatrix}
$$

# #6
**Find Eigen values and Eigenspace**
![[meta/images/Pasted image 20250326203116.png]]

Eigenvalues = 
$$
3,4
$$

Eigenspace = 
$$
\lambda=3:\space 
\text{Span}\left\{
\begin{bmatrix}
2 \\
1 \\
1
\end{bmatrix}
,
\begin{bmatrix}
-1 \\
-1 \\
0
\end{bmatrix}
\right\}
$$
$$
\lambda = 4:\space\space \text{Span}\left\{
\begin{bmatrix}
-2 \\
-1 \\
0
\end{bmatrix}
\right\}
$$

# #8
**Diagonalize**
![[meta/images/Pasted image 20250326203324.png|164]]
Its triangular so eigenvalue = $5$. Next we solve for the Nul space:

$$
\begin{bmatrix}
0 & 1 \\
0 & 5
\end{bmatrix} \sim\space \begin{bmatrix}
0 & 1 \\
0 & 0
\end{bmatrix} \implies \vec{x}=\begin{bmatrix}
x_{1} \\
0
\end{bmatrix} \implies \text{Nul A}=\text{Span}\left\{
\begin{bmatrix}
1 \\
0
\end{bmatrix}
\right\}
$$
There arent' enough eigenvectors to make a 2x2 matrix, so this matrix is not diagonalizable

# #12
![[meta/images/Pasted image 20250326205133.png|356]]
**Same as above, but we are given $\lambda=4, 1$** 
$$
\lambda=4:\space 
\begin{bmatrix}
-1 & -1 & -1 \\
-1 & -1 & -1 \\
-1 & -1 & -1
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 1 & 1 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
\implies \begin{bmatrix}
-x_{2}-x_{3} \\
x_{2} \\
x_{3}
\end{bmatrix}
$$
$$
\implies \text{eigenspace}_{4} = \text{Span}\left\{
\begin{bmatrix}
-1 \\
1 \\
0
\end{bmatrix},
\begin{bmatrix}
-1 \\
0 \\
1
\end{bmatrix}
\right\}
$$

$$
\lambda=1:\space \begin{bmatrix}
2 & -1 & -1 \\
-1 & 2 & -1 \\
-1 & -1 & 2
\end{bmatrix}
$$
$$
\space\space\space\space\space\space\space\space\space\space\space\space \sim \begin{bmatrix}
-1 & -1 & 2 \\ \
-1 & 2 & -1 \\
2 & -1 & -1 \\
\end{bmatrix}
$$
$$
\space\space\space\space\space\space\space\space\space \sim  \begin{bmatrix}
-1 & -1 & 2 \\
0 & 3 & -3 \\
0 & -3 & 3
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
-1 & -1 & 2 \\
0 & 1 & -1 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
-1 & 0 & 1 \\
0 & 1 & -1 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\implies \begin{bmatrix}
x_{3} \\
x_{3} \\
x_{3}
\end{bmatrix} \implies \text{Span}\left\{
\begin{bmatrix}
1 \\
1 \\
1 \\
\end{bmatrix}
\right\}
$$

And so we have our eigen vectors
$$
P=
\begin{bmatrix}
1 & -1 & -1 \\
1 & 1 & 0 \\
1 & 0 & 1
\end{bmatrix}
$$
And our eigenvalues:
$$
D=\begin{bmatrix}
1 & 0 & 0 \\
0 & 4 & 0 \\
0 & 0 & 4
\end{bmatrix}
$$

# #14
![[meta/images/Pasted image 20250326210315.png]]
**Same as above and our eigenvalues are $\lambda=3,4$**
$$
\lambda=3:\space 
\begin{bmatrix}
1 & 0 & 2 \\
2 & 0 & 4 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 0 & 2 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\implies \begin{bmatrix}
-2x_{3} \\
x_{2} \\
x_{3}
\end{bmatrix} \implies \text{Span}\left\{
\begin{bmatrix}
0 \\
1 \\
0
\end{bmatrix},
\begin{bmatrix}
-2 \\
0 \\
1
\end{bmatrix}
\right\}
$$

$$
\lambda=4:\space\space\space \begin{bmatrix}
0 & 0 & 2 \\
2 & -1 & 0 \\
0 & 0 & -1
\end{bmatrix} \sim \begin{bmatrix}
2 & -1 & 0 \\
0 & 0 & 1 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\implies \begin{bmatrix}
.5x_{2} \\
x_{2} \\
0
\end{bmatrix} \implies \text{Span}\left\{
\begin{bmatrix}
.5 \\
1 \\
0
\end{bmatrix}
\right\}
$$

$$
P = \begin{bmatrix}
0 & -2 & \frac{1}{2} \\
1 & 0 & 1 \\
0 & 1 & 0
\end{bmatrix}
$$

$$
D = \begin{bmatrix}
3 & 0 & 0 \\
0 & 3 & 0 \\
0 & 0 & 4
\end{bmatrix}
$$
# #16
![[meta/images/Pasted image 20250326213044.png]]
**Same as above and $\lambda=2,1$**

$$
\lambda=1:\space\space \begin{bmatrix}
-1 & -4 & -6 \\
-1 & -1 & -3 \\
1 & 2 & 4
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
-1 & -4 & -6 \\
0 & 3 & 3 \\
0 & -2 & -2
\end{bmatrix} \sim \begin{bmatrix}
-1 & -4 & -6 \\
0 & 1 & 1
\end{bmatrix} \sim \begin{bmatrix}
-1 & 0 & -2 \\
0 & 1 & 1 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\implies \begin{bmatrix}
-2x_3 \\
-1x_{3} \\
x_{3}
\end{bmatrix} \implies \text{Span}\left\{
\begin{bmatrix}
-2 \\
-1 \\
1
\end{bmatrix}
\right\}
$$

The next eigenvalue:
$$
\lambda=2:\space\space \begin{bmatrix}
-2 & -4 & -6 \\
-1 & -2 & -3 \\
1 & 2 & 3
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 2 & 3 \\
-2 & -4 & -6 \\
-1 & -2 & -3 \\
\end{bmatrix} \sim \begin{bmatrix}
1 & 2 & 3 \\
0 & 0 & 0 \\
0 & 0 & 0
\end{bmatrix}
$$
$$
\implies \begin{bmatrix}
-2x_{2}-3x_{3} \\
x_{2} \\
x_{3}
\end{bmatrix} \implies \text{Span}\left\{
\begin{bmatrix}
-2 \\
1 \\
0
\end{bmatrix},
\begin{bmatrix}
-3 \\
0 \\
1
\end{bmatrix}
\right\}
$$
Solution
$$
D = \begin{bmatrix}
1 & 0 & 0 \\
0 & 2 & 0 \\
0 & 0 & 2
\end{bmatrix}
$$
$$
P = \begin{bmatrix}
-2 & -2 & -3 \\
-1 & 1 & 0  \\
1 & 0 & 1
\end{bmatrix}
$$
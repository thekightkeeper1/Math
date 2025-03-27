**5.3 pp 295 2, 4, 6, 8, 12, 14, 16**
# #1
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


# #2
![[meta/images/Pasted image 20250326164148.png]]
Compute $A^4$
$A^k=PD^kP^{-1}$
We actually don't need $P^{-1}$ because of what D to an even power becomes the identity matrix


$$
PD^4=PI=P
$$
$$
\implies PD^4P^{-1}=PP^{-1}=I
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
$$
P = [1]
$$
# #12
# #14
# #16


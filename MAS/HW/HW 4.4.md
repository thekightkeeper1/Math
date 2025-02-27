**HW for 4.4: 1,3, 7, 13, 15, 16 pp 238.**

# 1,3
**Find the vector $x$ determined by the coordinate and the basis**
## #1
$$\mathcal{B}=\left\{\left[3\atop-5\right],\left[-4\atop6\right]\right\},\left[\mathbf{\,x\,}\right]_{\mathcal{B}}=\left[5\atop3\right]$$

Just put  $\mathcal{B}$ into a matrix and multiply with $\left[\,\mathbf{x}\,\right]_{\mathcal{B}}$
$$
\begin{bmatrix}
3 & -4 \\
-5 & 6
\end{bmatrix}
\begin{bmatrix}
5 \\
3
\end{bmatrix}
=\begin{bmatrix}
15-12 \\
-25+18
\end{bmatrix} = 
\begin{bmatrix}
3 \\
-7
\end{bmatrix}
$$

## #3
$$\mathcal{B}=\left\{\left[\begin{array}{l}{{1}}\\ {{-4}}\\ {{3}}\end{array}\right],\left[\begin{array}{l}{{5}}\\ {{2}}\\ {{-2}}\end{array}\right],\left[\begin{array}{l}{{4}}\\ {{-7}}\\ {{0}}\end{array}\right]\right\},\left[\,{\bf x}\,\right]_{\mathcal{B}}=\left[\begin{array}{l}{{3}}\\ {{0}}\\ {{-1}}\end{array}\right]$$

$$
\begin{bmatrix}
1 & 5 & 4 \\
-4 & 2 & -7 \\
3 & -2 & 0
\end{bmatrix} 
\begin{bmatrix}
3 \\
0 \\
-1
\end{bmatrix} =
\begin{bmatrix}
3-4 \\
-12+7 \\
9
\end{bmatrix}=\begin{bmatrix}
-1 \\
-5 \\
9
\end{bmatrix}
$$

# # 7
**Find $\left[\,\mathbf{x}\,\right]_{\mathcal{B}}$**
$$\mathcal{B} = \begin{bmatrix}1 & 2 \\ -3 & -5\end{bmatrix}, \space x = \begin{bmatrix}-2 \\ 1\end{bmatrix}$$


This means solving for scalars $c_{1}$ and $c_{2}$ such that the linear combo equation below holds.

$$c_{1}\underbrace{ \left[{1\atop{-3}}\right] }_{ \vec{b}_{1} }+c_{2}\underbrace{ \left[{2\atop{-5}}\right] }_{ \vec{b}_{2} }=\underbrace{ \left[{-2\atop1}\right] }_{ x }$$
$$\implies\left[{\begin{array}{l l}{1}&{2}\\ {-3}&{-5}\end{array}}\right]\left[{\begin{array}{l}{c_{1}}\\ {c_{2}}\end{array}}\right]=\left[{\begin{array}{l}{-2}\\ {1}\end{array}}\right]$$


We can solve this with an augmented matrix, 

$$
\text{The augmented matrix:}
\begin{bmatrix}
1 & 2 & | & -2 \\
-3 & -5 & | & 1
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 2 & | & -2 \\
0 & 1 & | & -5
\end{bmatrix} \sim 
\begin{bmatrix}
1 & 0 & | & 8 \\
0 & 1 & | & -5
\end{bmatrix}
$$
$$
\text{So we know, starting from the bottom row: }\space c_{2} = -5, c_{1}=8
$$
$$
\implies \left[\,\mathbf{x}\,\right]_{\mathcal{B}} = \begin{bmatrix}
8 \\
-5
\end{bmatrix}
$$


# #13
The set 
$$
\mathcal{B}=
\left\{\begin{flalign}
&1-t^{2} \\
&t-t^{2} \\
&2-2t+t^{2}
\end{flalign}\right\}
\text{  is a basis for } \mathbb{P}_2\space 
$$

# 15, 16
## #15
## #16

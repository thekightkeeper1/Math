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

**Find $\left[\,\mathbf{p(t)}\,\right]_{\mathcal{B}}$**

Oke, so we need:
$$
c_{1}\begin{bmatrix}
1 \\
0 \\
-t^2
\end{bmatrix} + c_{2}\begin{bmatrix}
0 \\
t \\
-t^2
\end{bmatrix} + c_{3}
\begin{bmatrix}
2 \\
-2t \\
t^{2}
\end{bmatrix} = \begin{bmatrix}
3 \\
t \\
-6t^{2}
\end{bmatrix}
$$
$$
\text{And getting rid of the units,  t}\implies \begin{bmatrix}
1 & 0 & 2 & | & 3 \\
0 & 1 & -2 & | & 1 \\
-1 & -1 & 1 & | & -6
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 0 & 2 & | & 3 \\
0 & 1 & -2 & | & 1 \\
-1 & -1 & 1 & | & -6
\end{bmatrix} \sim 
\begin{bmatrix}
1 & 0 & 2 & | & 3 \\
0 & 1 & -2 & | & 1 \\
0 & -1 & 3 & | & -3
\end{bmatrix} \sim 
\begin{bmatrix}
1 & 0 & 2 & | & 3 \\
0 & 1 & -2 & | & 1 \\
0 & 0 & 1 & | & -2
\end{bmatrix}
$$
$$
\sim \begin{bmatrix}
1 & 0 & 0 & | & 7 \\
0 & 1 & 0 & | & -3 \\
0 & 0 & 1 & | & -2
\end{bmatrix} \implies
\begin{bmatrix}
c_{1} \\
c_{2} \\
c_{3}
\end{bmatrix} = 
\begin{bmatrix}
7 \\
-3 \\
-2
\end{bmatrix}
$$


# 15, 16
**Mark each statement true or false. Justify. Assume $\mathcal{B}$ is a basis for vector space $V$**

## #15
**If $x$ $\in$ $V$ and $\mathcal{B}$ has $n$ vectors, then $\left[\,\mathbf{x}\,\right]_{\mathcal{B}}$ is in $\mathbb{R}^n$**
The number of vectors in a basis does tell us what space it looks like. Two basis vectors **would** be a plane. However, it does not tell us what dimension that vector exists in. 
- It could be a plane in 2 space, in which case the question is true.
- Or it could be a plane in 3d space, in which case there are 2 vectors, but its in $\mathbb{R}^3$ not $\mathbb{R}^2$

## #16
**If $\mathcal{B}$ is the standard basis (e.g, $\vec{e}_1, \dots , \vec{e_n}$), then $\left[\,\mathbf{x}\,\right]_{\mathcal{B}} = x$**

==This is true:==
When we say that $\mathcal{B}$ is the standard base, we mean this:
$$
\mathcal{B} =\left\{ \vec{e}_1, \dots , \vec{e_n} \right\}
$$
$$
\underbrace{ [\vec{e}_1, \dots , \vec{e_n}] =I }_{ \text{So the matrix representing $\mathcal{B}$ is just $I$.} }
$$

$$
\text{Let } \vec{u} = \begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix}
$$

We normally convert from $\vec{u}$ to $\left[\,\mathbf{u}\,\right]_{\mathcal{B}}$ via solving an augmented matrix until the left side is row reduced.
$$
\begin{bmatrix}
I & | & v  
\end{bmatrix}
$$
Well, in this case there is nothing to solve, since the identity matrix is already row reduced.
$$
\begin{bmatrix}
c_{1} \\
\vdots \\
c_{n}
\end{bmatrix} = 
\begin{bmatrix}
x_{1} \\
\vdots \\
x_{n}
\end{bmatrix}
$$

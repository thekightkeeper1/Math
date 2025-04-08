6.2 pp 364 1, 5, 7, 9, 11, 17, 21
# #1
**Orthogonal Set?**
![[meta/images/Pasted image 20250331212409.png]]
Just have to calculate the dot of  every combination
$$
\begin{align}
\vec{v}_{1} \cdot \vec{v}_{2} \\
 \vec{v}_{1} \cdot \vec{v}_{3} \\
\vec{v}_{2} \cdot \vec{v}_{3}

\end{align}
$$
$$
\begin{align}
-5+8-3=0 \\
-3-16+21=2
\end{align}
$$
$v_{2}$ is not orthogonal to $v_{3}$ 

# #5
**Same as above**
![[meta/images/Pasted image 20250331213242.png]]

$$
\begin{align}
-3-6-3+12=0 \\
9-16+7 + =0 \\
-3+24-21+0=0
\end{align}
$$ 
Every comb is orthogonal so the set is.

# #7
**Determine if u makes an orthogonal basis, and then write $\left[\mathbf{x}\right]_{\mathcal{U}}$** 
![[meta/images/Pasted image 20250331215128.png]]

It is an orthogonal set bc:
$$
u_{1} \cdot u_{2} = 12 -12 =0
$$
Next I use the formula below for conversion.
$$
c_{j} = \frac{y \cdot u_{j}}{\left| \left| u_{j} \right| \right| ^2}
$$
$$
\begin{align}
x \cdot u_{1} = 18+21=39 \\
x \cdot u_{2} = 54 - 28 =26 \\
\left| \left| u_{1} \right| \right|^{2} = 13  \\
\left| \left| u_{2} \right| \right|^{2} = 36+16 = 52
\end{align}
$$
$$
\begin{bmatrix}
\frac{39}{13} \\
\frac{26}{52}
\end{bmatrix} = \begin{bmatrix}
3 \\
\frac{1}{2}
\end{bmatrix}
$$

Note that the professor will prolly as you to write $x$ as a linear combo of the basis vectors:
$$
3\begin{bmatrix}
2 \\
-3
\end{bmatrix} + \frac{1}{2}\begin{bmatrix}
6 \\
4
\end{bmatrix} = 3u_{1} + \frac{1}{2} u_{2}
$$

# #9
**Same as above**
![[meta/images/Pasted image 20250331220533.png]]
$$
u_{1} \cdot u_{2} = 0,\space 
u_{1} \cdot u_{3} = 0,\space 
u_{2} \cdot u_{3} = 0,\space 
$$

$$
\begin{align}
&u_{1} \cdot x = 8-3=5 \\
&u_{2} \cdot x = -8-16-3=-27 \\
&u_{3} \cdot x = 16 -4 + 6=18 \\
&u_{1}^{2}=2 \\
&u_{2}^{2}=18 \\
&u_{3}^{2}=9 \\
\end{align}
$$
$$
\begin{bmatrix}
\frac{5}{2} \\
-\frac{3}{2} \\
2
\end{bmatrix}
$$


# #11
![[meta/images/Pasted image 20250331223632.png]]
$$
\begin{bmatrix}
1 \\
7
\end{bmatrix} \cdot
\begin{bmatrix}
-4 \\
2
\end{bmatrix} = 10
$$
$$
\begin{bmatrix}
-4 \\
2
\end{bmatrix}^{2} = 20
$$

$$
\hat{y} = -\frac{10}{20}\begin{bmatrix}
-4 \\
2
\end{bmatrix} = \begin{bmatrix}
-2 \\
1
\end{bmatrix}
$$

# #17 
**If Orthogonal set, make orthonormal**
![[meta/images/Pasted image 20250331223921.png]]
$$
u_{1} \cdot u_{2} = 0 
$$
So it is orthogonal.
$$
\begin{align}
\left| \left| u_{1} \right| \right| = \frac{1}{\sqrt{ 3 }}\\
\left| \left| u_{2} \right| \right| = \frac{1}{\sqrt{ 2 }} 
\end{align}
$$
$$
\sqrt{ 3 } \begin{bmatrix}
\frac{1}{3} \\
\frac{1}{3} \\
\frac{1}{3} \\
\end{bmatrix}
,
\sqrt{ 2 }\begin{bmatrix}
-\frac{1}{2} \\
0 \\
\frac{1}{2}
\end{bmatrix}
$$
$$
=\text{exactly what you would expect}
$$


# #19
**Same as above**
![[meta/images/Pasted image 20250331225039.png]]
$$
u_{1} \cdot u_{2} = -.48-.48
$$
$$
\left| \left| u_{1} \right| \right| = \sqrt{.36+.64  }=1
$$
And obviously the same will be true for $\left| \left| u_{2} \right| \right|$
So this is already orthonormal
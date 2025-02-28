**2,4,6,10,16 pg 254**
# #2

Let $\mathcal{B}=\{ b_{1},b_{2} \}$ and $\mathcal{C} = \{ c_{1},c_{2} \}$ be bases for a vector space $V$. Suppose that $b_{1}=-c_{1}+4c_{2}$ and $b_{2}=5c_1-3c_{2}$
1. Find the transformation matrix from $\mathcal{B}$ to $\mathcal{C}$
2. Find $\left[\,\mathbf{x}\,\right]_{\mathcal{C}}$ for $x=5b_{1}+3b_{2}$

The equations they gave us tell us what linear comb of $\mathcal{C}$ we can use to write $\mathcal{B}$.
$$\left[\,\mathbf{b}_1\,\right]_{\mathcal{C}}= \begin{bmatrix}
-1 \\
4
\end{bmatrix} \, \land \,
\left[\,\mathbf{b}_2\,\right]_{\mathcal{C}} =
\begin{bmatrix}
5 \\
-3
\end{bmatrix}
$$
If you think about a linear transform, $A$ is just the base vectors transformed, and multiplying by $A$ transforms any vector to the new space.
If A is the $\mathcal{B}$ vectors transformed to $\mathcal{C}$
$$
A=
\begin{bmatrix}
-1 & 5 \\
4 & -3
\end{bmatrix}
$$
Then we just multiply it by any   $\vec{x} \in \mathcal{B}$ to transform (convert) it into $\left[\mathbf{x}\right]_{\mathcal{C}}$. 
 $A:\mathcal{B} \to \mathcal{C}$

$$
A\left[\mathbf{x}\right]_{\mathcal{C}} = \begin{bmatrix}
-1 & 5 \\
4 & -3
\end{bmatrix} \begin{bmatrix}
5 \\
3
\end{bmatrix}
$$
$$
\begin{bmatrix}
-5+15 \\
20-9
\end{bmatrix} = \begin{bmatrix}
10 \\
11
\end{bmatrix}
$$

# #4
Let the following be bases for $V$
$\mathcal{A} = \{ a_{1},a_{2},a_{3} \}$
$\mathcal{D} =\{ d_{1},d_{2},d_{3} \}$
And let:
$P = \begin{bmatrix}\left[\,\mathbf{d}_1\,\right]_{\mathcal{A}} & \left[\,\mathbf{d}_2\,\right]_{\mathcal{A}} & \left[\,\mathbf{d}_3\,\right]_{\mathcal{A}}\end{bmatrix}$
Which of the following equations is satisfied by $P$ for all $x$ in $V$.
$$
a)\,\,\,\,\,\,\left
[\mathbf{x}\right]_{\mathcal{A}} = P\left[\mathbf{x}\right]_{\mathcal{D}}
\,\,\,\,\,\,\,\,\,\,
b)\,\,\,\,\,\,
\left[\mathbf{x}\right]_{\mathcal{D}}=P\left[\mathbf{x}\right]_{\mathcal{A}}
$$

From #2 we know that when you represent $\mathcal{B}$ using $\mathcal{C}$, it creates
$A:\mathcal{B}\to \mathcal{C}$
Therefore representing $\mathcal{D}$ with $\mathcal{A}$ must make : 
$P:D\to A$
This is satisfied by the second equation, which converts from $\left[\mathbf{x}\right]_{\mathcal{D}}\to \left[\mathbf{x}\right]_{\mathcal{A}}$

![[meta/images/Pasted image 20250228145154.png]]

# #6
Let the following be bases for $V$
$\mathcal{D} = \left\{ d_{1},d_{2},d_{3} \right\}$
$\mathcal{F} = \left\{ f_{1},f_{2},f_{3} \right\}$
Find $A$ for $\mathcal{F}$ to $\mathcal{D}$ given:
$f_{1}=2d_{1}-d_{2}+d_{3}$
$f_{2} = 3d_{2}+d_{3}$
$f_{3}=-3d_{1}+2d_{3}$

$$
A_{\mathcal{F}\to \mathcal{D}}=\begin{bmatrix}
2 & 0 & -3 \\
-1 & 3 & 0 \\
1 & 1 & 2
\end{bmatrix}
$$

Next, find $\left[\mathbf{x}\right]_{\mathcal{D}}$ given $x=f_{1}-2f_{2}+2f_{3}$
$$
\left[\mathbf{x}\right]_{\mathcal{D}}=Ax=\begin{bmatrix}2 & 0 & -3 \\
-1 & 3 & 0 \\
1 & 1 & 2
\end{bmatrix} \begin{bmatrix}
1 \\
-2 \\
2
\end{bmatrix}
$$
$$
=\begin{bmatrix}
2-6 \\
-1-6 \\
1-2+4
\end{bmatrix} = \begin{bmatrix}
-4 \\
-7 \\
3
\end{bmatrix}
$$


# #10
**Find the change of base matrix from $\mathcal{B}\to \mathcal{C}$ and $\mathcal{C} \to \mathcal{B}$**

$$
b_{1}=\begin{bmatrix}
7 \\
-2
\end{bmatrix},
b_{2}=\begin{bmatrix}
2 \\
-1
\end{bmatrix},
c_{1}=
\begin{bmatrix}
4 \\
1
\end{bmatrix}, c_{2} = \begin{bmatrix}
5 \\
2
\end{bmatrix}
$$

We know from [[MAS/HW/HW 4.4|HW 4.4]] that to convert a single vector, you just augment it into the matrix representing a space. 

# #16



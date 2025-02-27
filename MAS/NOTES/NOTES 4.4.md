**Coordinate Systems**


> [!NOTE] Theorem 8 -- Definition of a basis
> Given a basis $\mathcal{B}=\{ \vec{b}_1, \dots , \vec{b_n} \}$ For vector space $V$. For every vector $v$ in $V$ there is a way to represent it as a linear combination. 
> E.g. **There are constants** $c_{1},\dots ,c_{n}$ **such that** $v = c_{1}\vec{b}_1, \dots , c_{n}\vec{b_n}$

So normally we represent vectors using the natural basis of $\vec{e}_1, \dots , \vec{e_n}$. And so representing $v$ is as simple as using putting its coordinates in a vertical matrix.
$$
v = (2,3) = \begin{bmatrix}
2 \\
3
\end{bmatrix}
$$

If we want to specify that it is in a different basis, then we would be given a basis, and to clarify that we are not using the natural $\vec{e}_1, \dots , \vec{e_n}$ we would use that notation on the left.
$$
\begin{bmatrix}
v
\end{bmatrix}_{\mathcal{B}} = \begin{bmatrix}
\vdots
\end{bmatrix}
$$
And inside of the RHS would be the coefficients we use to represent $v$ using the basis $\mathcal{B}$

## E.g.
Find $\left[\,\mathbf{a}\,\right]_{\mathcal{B}}$ given:
$$
\mathcal{B}=\left\{ 
\begin{bmatrix}
2 \\
0
\end{bmatrix},
\begin{bmatrix}
0 \\
2
\end{bmatrix}
\right\} 
,\space a=\begin{bmatrix}
1 \\
1
\end{bmatrix}
$$

![[meta/images/Pasted image 20250227134753.png|400]]

This one can be logic'ed out pretty easily. I just multiplied the basis vectors by 2. So to represent a normal vector in $\mathcal{B}$, I just need to divide the $x,y$ by 2.

$$
\left[\,\mathbf{a}\,\right]_{\mathcal{B}} = \begin{bmatrix}
\frac{1}{2} \\
\frac{1}{2} \\
\end{bmatrix}
$$
And if you multiply by the matrix you will be able to see this.
$$
\mathcal{B}\left[\,\mathbf{a}\,\right]_{\mathcal{B}}=
\begin{bmatrix}
2 & 0 \\
0 & 2
\end{bmatrix}
\begin{bmatrix}

\end{bmatrix}
$$


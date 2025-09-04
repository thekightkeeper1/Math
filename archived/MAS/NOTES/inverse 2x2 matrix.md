$$
\begin{bmatrix}
a & b \\
c & d
\end{bmatrix}^{-1} = \frac{1}{\det A}\begin{bmatrix}
d & -b \\
-c & a
\end{bmatrix}
$$

That is, $\frac{1}{|A|}$ and then do a diagonal swap of $a$ $d$. Then multiply the other diagonal by negative

$$
\begin{bmatrix}
a  & b \\
c & d
\end{bmatrix} \sim\space \begin{bmatrix}
a & b \\
c - a \times \frac{c}{a} & d - b\times \frac{c}{a}
\end{bmatrix}
$$
$$
d- b\times \frac{c}{a}= d-\frac{cb}{a}
$$
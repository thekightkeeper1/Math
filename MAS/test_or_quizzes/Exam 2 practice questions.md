# 3.1 pg 177
---
Calculate $Det A$ using cofactor expansion. If possible, choose a row/column that has the least number of operations to complete.

## 7.)
$$
\begin{bmatrix}
4 & 3 & 0 \\
6 & 5 & 2 \\
9 & 7 & 3
\end{bmatrix}
$$
**Solution**:
$$
Det A = 4
$$
---
## 9.)
$$
\begin{vmatrix}
4 & 0 & 0 & 5 \\
1 & 7 & 2 & -5 \\
3 & 0 & 0 & 0 \\
8 & 3 & 1 & 7
\end{vmatrix}
$$
**Solution**
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

---

## 19.)

$$19.\ {\Biggl[}{\begin{array}{l l}{a}&{b}\\ {c}&{d}\end{array}}{\Biggr]},{\Biggl[}{\begin{array}{l l}{c}&{d}\\ {a}&{b}\end{array}}{\Biggr]}$$

**Solution**
It swapped rows. 
You need to multiply the determinant by $-1$

---

## 20.)
$${\bf20.}\ \left[{\begin{array}{l l}{a}&{\ \ \ b}\\ {c}&{\ \ \ d}\end{array}}\right],\left[{\begin{array}{l l}{a}&{\ \ \ b}\\ {k c}&{\ \ \ k d}\end{array}}\right]$$

Solution
$\det B$ is now $k$ times whatever $\det A$ was. 
So lets say that $\det A = 2$. This means that $\det B = 2k$.
If we wanted to get the determinant of the original matrix, matrix $A$, then we would have to multiply $\det B$ by $\frac{1}{k}$ .

---
# 3.3 pg

## 5.)
$${\bf5.}\left|\begin{array}{r r r}{{1}}&{{5}}&{{-4}}\\ {{-1}}&{{-4}}&{{5}}\\ {{-2}}&{{-8}}&{{7}}\end{array}\right|$$

**Solution**
$$
\det A = -3
$$

---

## 9.)
$${\bf{9.}}\left|{\begin{array}{r r r r}{1}&{-1}&{-3}&{0}\\ {0}&{1}&{5}&{4}\\ {-1}&{0}&{5}&{3}\\ {3}&{-3}&{-2}&{3}\end{array}}\right|$$

**Solution**
$$
\det A =-28
$$

---
**Given the following, solve questions 15-20**
$$\left|{\begin{array}{l l l}{a}&{b}&{\;\;\;c}\\ {d}&{\;\;e}&{\;\;\;f}\\ {g}&{h}&{\;\;\;i}\end{array}}\right|=7.$$
(Rember that the verticle bars mean determinant)

---
## 15.)
$$
\begin{vmatrix}
a & b & c \\
d & e & f \\
3g & 3h & 3i
\end{vmatrix}
$$

**Solution**
$$
\det A = 3\times 7 = 21
$$
Ima be honest this rule confuses me. But TIL from a friend that you can kinda just think of it as pulling the 3 outside of the matrix.

---
## 19.)
$${\bf19.}\,\,\left|\begin{array}{c c c}{{a}}&{{b}}&{{c}}\\ {{2d+a}}&{{2e+b}}&{{2f+c}}\\ {{g}}&{{h}}&{{i}}\end{array}\right|$$

**Solution**
$$
{r_{2}=2r_{2} \atop r_{2}=r_{2}+r_{1}}
$$
$$
\det A = 7*2 = 14
$$

## Not a question but...

> [!Important] Title
> If the determinant is non-zero, then the matrix is invertible.
> If you really want to, then make up a $An\times n$ matrix and test it out. Didnt think it was worth making a question for though

---
# 4.1
---
## 1.)
Let $V$ be in the first quadrant:
$$V=\left\{\left[{\begin{array}{l}{x}\\ {y}\end{array}}\right]:x\geq0,y\geq0\right\}$$

a.) is this closed under addition
b.) is this closed under scalar multiplication

**Solution**
a.) Yes. 
$$
\vec{u}=\begin{bmatrix}
a \\
b
\end{bmatrix}
,
\vec{v}=\begin{bmatrix}
c \\
d
\end{bmatrix}
,
\vec{u},\vec{v} \in V
$$
$$
\vec{u}+\vec{v}=\begin{bmatrix}
a \\
c
\end{bmatrix}
+
\begin{bmatrix}
b \\
d
\end{bmatrix}=\begin{bmatrix}
a+b \\
c+d
\end{bmatrix}
$$
The final vector is in $V$ because a,b,c,d are $\in\mathbb{R}\text{ and } \geq 0$
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
# 3.2 pg 185 

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
# 4.1 208
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
The final vector is in $V$ because $a,b,c,d$ are $\in\mathbb{R}\text{ and } \geq 0$

---
## 3.)
Let $H$ be the set of points inside and on the unit circle
$$W=\left\{{\left[\begin{array}{l}{x}\\ {y}\end{array}\right]}:x y\geq0\right\}$$

```desmos-graph
left=-2; right=2;
bottom=-2; top=2;
height=300; width=300;
degreeMode=degrees;
---
x^2+y^2<=1

```

Is this a sub-space of $\mathbb{R}^2$?

**Solution**
No, because the circle is not a subspace. It fails scalar multiplcation
$$
\vec{v}\begin{bmatrix}
\frac{\sqrt{ 2 }}{2} \\
\frac{\sqrt{ 2 }}{2}
\end{bmatrix} \text{The green one.}
$$
Multiplying this vector by 2 brings it off of the circle.
```desmos-graph
left=-2; right=2;
bottom=-2; top=2;
height=300; width=300;
degreeMode=degrees;
---
x^2+y^2<=1
y=x \{0<x<2\sin45\}|red
y=x \{0<x<\sin45\}||label:original
```

---

## 11.)
Show that the set $W$ which is all vectors in the form:
$$\begin{bmatrix}
5b+2c \\
b \\
c
\end{bmatrix}
$$
Form a subspace of $\mathbb{R}^3$ and find the span.

**Solution**
$$
\text{Span}\left\{
u,v
\right\}
$$
$${\mathbf{u}}={\left[\begin{array}{l}{5}\\ {1}\\ {0}\end{array}\right]},{\mathbf{v}}={\left[\begin{array}{l}{2}\\ {0}\\ {1}\end{array}\right]}$$
This is a subspace because any set that can be represented as a span will follow all the rules to qualify as a vector space.

---
## 13.)
$$13.\,\,\operatorname{Let}\,\mathbf{v}_{1}={\left[\begin{array}{l}{1}\\ {0}\\ {-1}\end{array}\right]},\mathbf{v}_{2}={\left[\begin{array}{l}{2}\\ {1}\\ {3}\end{array}\right]},\mathbf{v}_{3}={\left[\begin{array}{l}{4}\\ {2}\\ {6}\end{array}\right]},\operatorname{and}\,\mathbf{w}={\left[\begin{array}{l}{3}\\ {1}\\ {2}\end{array}\right]}.$$

Prove or disprove $\vec{w}$ is in the span of $\vec{v}_1, \dots , \vec{v_3}$

**Solution**
Yes it is.
Solve the follow augmented matrix. Since it is **consistent** then we know $\vec{w}$ is in $V$.
$$
\begin{bmatrix}
v_{1} & v_{2} & v_{3} & | & \vec{w}
\end{bmatrix}
$$
$$
=\begin{bmatrix}
1 & 2 & 4 & | & 3 \\
0 & 1 & 2 & | & 1 \\
 -1 & -3 & 6 & | & 2
\end{bmatrix}
$$

---

## 14.)
$$14.\,\operatorname{Let}\mathbf{v}_{1},\mathbf{v}_{2},\mathbf{v}_{3}\,\mathrm{be\;as\;in\;Exercise\;13,\,and\;let}\;\mathbf{w}={\left[\begin{array}{l}{8}\\ {4}\\ {7}\end{array}\right]}$$
Is $\vec{w}$ in the span $\vec{v}_1, \dots , \vec{v_3}$?

**Solution**
No.
Solve the same matrix as above, but use the new $\vec{w}$. Your last row looks like:
$$
\begin{bmatrix}
a & b & c & | & d \\
\vdots & \vdots & \vdots & | & \vdots \\
0 & 0 & 0 & | & 1
\end{bmatrix}
$$

This implies that $0=1$ which is not **consistent**.

---

# 4.2 pp 219

---
## 1.)
$$\begin{array}{r}{{\mathbf{1.~Determine~if~w}=\left[\begin{array}{c}{{1}}\\ {{3}}\\ {{-4}}\end{array}\right]}{\mathrm{~is~in~Nul~}}A,{\mathrm{where}}}\\ {{}}\\ {{A=\left[\begin{array}{c c c}{{3}}&{{-5}}&{{-3}}\\ {{6}}&{{-2}}&{{0}}\\ {{-8}}&{{4}}&{{1}}\end{array}\right]}.}\end{array}$$

**Solution**
$A\vec{w}=\vec{0}$ So $\vec{w}$ $\in$ $A$
$${\left[\begin{array}{l l l}{3}&{-5}&{-3}\\ {6}&{-2}&{0}\\ {-8}&{4}&{1}\end{array}\right]}{\left[\begin{array}{l}{1}\\ {3}\\ {-4}\end{array}\right]}={\left[\begin{array}{l}{0}\\ {0}\\ {0}\end{array}\right]}$$

## 5.)
Describe $\text{Nul A}$ by listing the spanning vectors. 
$$
\begin{bmatrix}
1 & -2 & 0 & 4 & 0 \\
0 & 0 & 1 & -9 & 0 \\
0 & 0 & 0 & 0 & 1
\end{bmatrix}
$$

**Solution**
Its already in echelon form, so just write the $\vec{x}$
$$
\begin{bmatrix}
2 \\
1 \\
0 \\
0 \\
0
\end{bmatrix}, \begin{bmatrix}
-4 \\
0 \\
9 \\
1 \\
0
\end{bmatrix}
$$

---

## 7.)
==For problems 7-14 show that the set $W$ is a vector space, or use an example to disprove it.==

$$7.\;\;\left\{{\left[\begin{array}{l}{a}\\ {b}\\ {c}\end{array}\right]}\colon a+b+c=2\right\}$$
**Solution**
Not a vector space. There is a constant in that equation, which means that this set will not contain $(0,0,0)$ 

## 9.) 
$${\textbf{9.}}\left\{{\left[\begin{array}{l}{a}\\ {b}\\ {c}\\ {d}\end{array}\right]}\colon{\begin{array}{l}{a-2b=4c}\\ {2a=c+3d}\end{array}}\right\}$$

**Solution**
Yes it is a set.
$W$ is the set of solution of the homogenous system:
$$
\begin{matrix}
& a & -2b & -4c & +0  & =0 \\
&2a & +0  & -c  & -3d & =0
\end{matrix}
$$
If that doesnt make sense. Then just write the system of equations in a matrix
$$
\begin{bmatrix}
1 & -2 & -4  & 0 \\
2 & 0 & -1 & -3
\end{bmatrix}
$$
You can solve this matrix and get 2 pivots. If im not mistaken $\text{Row A}$ is the same as $W$



---

# 4.3 pp 228

---

## 1.)

==For questions 1-8 Determine:
a) which sets are bases
b) If *not* base, then at least which vectors are linearly indepndent.
c) which span $\mathbb{R}^3$==
$$\mathbf{1.}\;{\left[\begin{array}{l}{1}\\ {0}\\ {0}\end{array}\right]},{\left[\begin{array}{l}{1}\\ {1}\\ {0}\end{array}\right]},{\left[\begin{array}{l}{1}\\ {1}\\ {1}\end{array}\right]}$$
**Solution**
There is a pivot in every column so it is a base. 
Since there are no free variables it spans $\mathbb{R}^3$

## 3.)
$${\bf3.}\,\,\left[{\begin{array}{r}{1}\\ {0}\\ {-2}\end{array}}\right]\!,\,\left[{\begin{array}{r}{3}\\ {2}\\ {-4}\end{array}}\right]\!,\,\left[{\begin{array}{r}{-3}\\ {-5}\\ {1}\end{array}}\right]$$

**Solution**
Linearly depended, and does not span $\mathbb{R}^3$
$$
A \sim 
\begin{bmatrix}
1 & 3 & -3 \\
0 & 2 & -5 \\
0 & 0 & 0
\end{bmatrix}
$$
However $c_{1}$ is linearly independent of $c_{2}$. because they have pivots.

## 5.)
$${\bf5.}\,\,\left[\begin{array}{c}{{1}}\\ {{-3}}\\ {{0}}\end{array}\right]\!,\,\left[\begin{array}{c}{{-2}}\\ {{9}}\\ {{0}}\end{array}\right]\!,\,\left[\begin{array}{c}{{0}}\\ {{0}}\\ {{0}}\end{array}\right]\!,\,\left[\begin{array}{c}{{0}}\\ {{-3}}\\ {{5}}\end{array}\right]$$

**Solution**
The $\vec{0}$ is in the set, so it is linearly dependent. However:
$$
\begin{bmatrix}
1 & -2 & 0 & 0 \\
-3 & 9 & 0 & -3 \\
0 & 0 & 0 & 5
\end{bmatrix} \sim \begin{bmatrix}
1 & -2 & 0 & 0 \\
0 & 3 & 0 & -3 \\
0 & 0 & 0 & 5
\end{bmatrix}
$$
This does have 3 pivots, and so it does have exactly enough vectors to span $\mathbb{R}^3$

---

## 15.)
Find the basis for the space spanned by $\vec{v}_1, \dots , \vec{v_5}$ given the below vectors:
$$\textbf{15.}\,\,{\left[\begin{array}{r}{1}\\ {0}\\ {-3}\\ {2}\end{array}\right]},\,{\left[\begin{array}{r}{0}\\ {1}\\ {2}\\ {-3}\end{array}\right]},\,{\left[\begin{array}{r}{-3}\\ {-4}\\ {1}\\ {6}\end{array}\right]},{\left[\begin{array}{r}{1}\\ {-3}\\ {-8}\\ {7}\end{array}\right]},{\left[\begin{array}{r}{2}\\ {1}\\ {-6}\\ {9}\end{array}\right]}$$

**Solution**
Put it into a matrix and reduce that shit. Should get pivots in:
$$
v_{1},v_{2},v_{4}
$$
$$

\begin{bmatrix} 1 & 0 & -3 & 1 & 2 \\
 0 & 1 & -4 & -3 & 1 \\ 
 0 & 0 & 0 & 1 & -2 \\ 
 0 & 0 & 0 & 0 & 0
\end{bmatrix}
$$


---

## 19.)
Let 
$$
\begin{align}
H = \text{Span}\left\{
v_{1}, v_{2},v_{3}
\right\} \\
4v_{1}+5v_{2}-3v_{3}=0
\end{align}
$$
Find a basis for $H$

**Solution**
Just use any 2 of the vectors. E,g $\{ v_{1},v_{2} \}$
The equation tells us that 1 of the vectors can be represented as a combination of the other 2.

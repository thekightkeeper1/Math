# 3.1
## Vector valued function

![[meta/images/Pasted image 20250527150703.png]]
## Problem 1
graph the curve:
$r(t) = 4\sin(t) \hat{i} + 3\cos (t) \hat{j},   t \in [0, 2\pi]$



> [!Limits (Component-Wise Theorm)]
>
> TO find the limit you just do the limit of the individual functions. As such, to find the derivative you just take the derivative of the individual parts


## Problem #2
![[meta/images/Pasted image 20250527152116.png]]
Focus on the limit

## Problem #3
![[meta/images/Pasted image 20250527152336.png]]
![[meta/images/Pasted image 20250527152358.png]]


## Problem 4
**Make a helix:**

> [!Hint]
> You basically are just making a circle with some added flair.


# Lecture 7
## Problem 5
![[meta/images/Pasted image 20250527153312.png]]
## Problem #8
![[meta/images/Pasted image 20250527153519.png]]

![[meta/images/Pasted image 20250527153550.png]]

# Arc Length
For a parameterized 2D vector we have the following formula:
$$
s = \int_{a}^b \sqrt{ x'(t)^{2} + y'(t)^{2} }dt
$$
And it applies the same if you have $f(t)\hat{i}$ etc instead of a $x(t)$ function. For three functions, it is unsuprisingly just plop the third dimension down in there
$$
s = \int_{a}^b \sqrt{ x'(t)^{2} + y'(t)^{2} +z'(t)^{2}}dt
$$
## Problem #10
![[meta/images/Pasted image 20250527160546.png]]
![[meta/images/Pasted image 20250527160632.png]]
![[meta/images/Pasted image 20250527160639.png]]

## Problem #11 Arc length parameterization
This changes the parameter from some arbitrary $t$ to a definite $s$ which represents the length of the curve, so you know at what point in space it has a certain length.
![[meta/images/Pasted image 20250527204513.png]]

# Curvature.
If $\vec{r}(s)$ has been parameterized, then then curvature $\kappa$ is just $\lvert \lvert T'(s) \rvert \rvert$
If we have instead a general parameterization, then we instead have to do 
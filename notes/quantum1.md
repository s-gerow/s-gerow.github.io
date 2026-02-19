## Introductory Notes

This is the first lecture of my applied quantum mechanics class. The lecture notes follow roughly the textbook: "Applied Quantum Mechanics, 3rd ed", by A.F.J. Levi, with some supplemental notes added by me from the lecturer's additional notes and "Introduction to Quantum Mechanics, 3rd ed" by David J. Griffiths and Darrell F. Schroeter that I deem neccessary to understanding.

## Math Review

### Complex Numbers

A _complex number_ is a number of the form 
$$z=a+ib$$
where $i=\sqrt{-1}$, $a$ is the real part, $b$ is the imaginary part, and $a,b\in\mathbb{R}$. We denote the real part of $z$ as $\Re(z) = a$ and the imaginary part as $\Im(z) = b$.

A complex number can be thought of as existing along two axes: the real and the imaginary. Where the real part is the magnitude along the real axis, and the imaginary part is the magnitude along the imaginary axis. If you imagine a line from the origin ($z=0$) to the point $z=a+bi$, then you could also express the number in polar coordinates, $(r, \theta)$. In this form, $r^2 = a^2+b^2$ and $\theta = \tan^{-1}(b/a)$. [Note that $\theta$ is not unique and the addition of any $2k\pi$ would result in the same $\theta$]. 

The polar form of complex numbers also gives rise to the _norm_ of a complex number, defined as $|z| = \sqrt{a^2+b^2}$. This is also called the _modulus_ of the number and is equal $r$. Using basic trigonometric identities we can write the polar form of a complex number as:
$$z = r\cos\theta + ir\sin\theta$$
or, by using _Euler's Formula_:
$$z = re^{i\theta}$$

#### Conjugate

The _complex conjugate_ is found by swapping the sign of all imaginary parts and is denoted with:
$$\bar{z} = a-ib = re^{-i\theta}$$
It can also be thought of as reflecting the number across the real axis.

#### Addition and Subtraction

Adding an subtracting complex numbers is fairly simple. Given two complex numbers: $z_1 = a_1 + ib_1$ and $z_2 = a_2 + ib_2$. The sum of them is given as:
$$z_1\pm z_2 = (a_1\pm a_2) + i(b_1\pm b_2)$$

#### Multiplication

Using the same $z_1$ and $z_2$, the product is found using the distributive property:
$$z_1z_2 = (a_1+ib_1)(a_2+ib_2) = (a_1a_2 - b_1b_2) + i(a_1b_2 + a_2b_2)$$
Alternatively, using the polar form may be easier, in which case:
$$z_1z_2 = r_1e^{i\theta_1}r_2e^{i\theta_2}=r_1r_2e^{i(\theta_1+\theta_2)}$$

#### Division

The process of dividing two complex numbers is much the same as dividing two real numbers, i.e. multiplying one number by the inverse of another. Except, instead of the multiplicative inverse, we multiply the fraction by the complex conjugate of the denominator:
$$\frac{z_1}{z_2}=\frac{(a_1+ib_1)}{(a_2+ib_2)}\left(\frac{a_2-ib_2}{a_2-ib_2}\right) = \frac{(a_1a_2 + b_1b_2) + i(a_1b_2 - a_2b_2)}{a_2^2+b_2^2}$$
Or, using the polar form again:
$$\frac{z_1}{z_2} = \frac{r_1}{r_2}e^{i(\theta_1-\theta_2)}$$

#### Roots

Finally, the nth roots of a complex number are found with _De Moivre's theorem_:
$$z_k = \sqrt[n]{r}\left[e^{i\left(\frac{\theta+2k\pi}{n}\right)}\right]$$
for $k = 0,1,2,3,...,n-1$.

#### Examples
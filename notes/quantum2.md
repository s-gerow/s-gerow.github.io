## Math Review
This is a brief review of relavent linear algebra concepts. For a more in depth discussion, see my lecture notes from Linear Algebra, denoted ma432.

### Matrix Operations

An $m\times n$ matrix is given by:
$$
\rm \mathbf{A} = 
    \begin{bmatrix}
        a_{11} & a_{12} & \ldots & a_{1n} \cr
        a_{21} & a_{22} & \ldots & a_{2n} \cr
        \vdots & \vdots & \ddots & \vdots \cr
        a_{m1} & a_{m2} & \ldots & a_{mn}
    \end{bmatrix}
$$
Given two matrices, they are equal if they have the same size $(m,n)$ and $a_{ij} = b_{ij}$ for all $i,j$

#### Addition and Subtraction

If two matrices are the same size, $(m,n)$, then:
$$
\mathbf{C} = \mathbf{A}\pm\mathbf{B}
$$
iff (if and only if)
$$
c_{ij} = a_{ij} \pm b_{ij}
$$

#### Multiplication

To multiply two matrices they must have complimentary sizes: $(m,n)$ and $(n,m)$. In other words, the number of columns in the first matrix must match the number of rows in the second. From this we can conclude that $\mathbf{AB}\ne\mathbf{BA}$. If the operation is defined (i.e., the sizes are compatible) then the product of two matrices is defined as:
$$
c_{ij} = \sum_k a_{ik}b_{kj}
$$
Or, if you recall from my lecture notes on Modern Physics and Classical Mechanics, in _Einstein Summation Notation_ (ESN) we can drop the sum and assume summation over repeated indices:
$$
c_{ij} = a_{ik}b_{kj}
$$
For products of more than two matrices, matrix multiplication is _associative_, or $(\mathbf{AB})\mathbf{C} = \mathbf{A}(\mathbf{BC})$ as long as the permutation order is maintained.

#### Division

Recall from algebra that division is nothing more than multiplication by the inverse.
$$
\frac{x}{y} = z \implies z*y=x
$$
We can say then that the if $\mathbf{AB} = \mathbf{C}$, then $\mathbf{B} = \mathbf{A^{-1}C}$.

Assuming it exists, we define $\mathbf{A^{-1}}$ as the _inverse_ of $\mathbf{A}$. To determine if A exists we can exploit the properties of the so-called _Identity Matrix_: a matrix of zeros except for the main diagonal, which is ones.
$$
\mathbf{I} = 
    \begin{bmatrix}
        1 & 0 & \ldots & 0 \cr
        0 & 1 & \ldots & 0 \cr
        \vdots & \vdots & \ddots & \vdots \cr
        0 & 0 &\ldots & 1
    \end{bmatrix}
$$
If there exists such a matrix $\mathbf{B}$ such that $\mathbf{AB} = \mathbf{I}$, then $\mathbf{B} = \mathbf{A^{-1}}$. If a matrix has an inverse it is called _nonsingular_ or _invertible_; else, it is called _singular_.

One of the perperties of the inverse is that if $\mathbf{C} = \mathbf{AB}$, then $\mathbf{C^{-1}}=(\mathbf{AB})^{-1}=\mathbf{A^{-1}B^{-1}}$

#### Transpose and Conjugate

To find the transpose of a matrix you simply swap the rows and columns such that if $\mathbf{B} = \mathbf{A^{T}}$, then $B_{ij} = A_{ji}$. Or, imagine that you are reflecting the elements of the matrix across the main diagonal:
$$
\mathbf{A^{T}} = 
    \begin{bmatrix}
        a_{11} & a_{12} & \ldots & a_{1n} \cr
        a_{21} & a_{22} & \ldots & a_{2n} \cr
        \vdots & \vdots & \ddots & \vdots \cr
        a_{m1} & a_{m2} & \ldots & a_{mn}
    \end{bmatrix}^{T}
    =
    \begin{bmatrix}
        a_{11} & a_{21} & \ldots & a_{m1} \cr
        a_{12} & a_{22} & \ldots & a_{m2} \cr
        \vdots & \vdots & \ddots & \vdots \cr
        a_{1n} & a_{2n} & \ldots & a_{mn}
    \end{bmatrix}
$$

In this course we will assume that all elements of matrices are complex numbers, thus to take a conjugate of a matrix, you would take the conjugate of each individual element:
$$
\mathbf{A^{*}} = 
    \begin{bmatrix}
        \bar{a_{11}} & \bar{a_{12}} & \ldots & \bar{a_{1n}} \cr
        \bar{a_{21}} & \bar{a_{22}} & \ldots & \bar{a_{2n}} \cr
        \vdots & \vdots & \ddots & \vdots \cr
        \bar{a_{m1}} & \bar{a_{m2}} & \ldots & \bar{a_{mn}}
    \end{bmatrix}
$$

If you take the conjugate and transpose a matrix it is called the _Hermitian Conjugate_:
$$
\mathbf{B} = \mathbf{A^{\dagger}} \iff B_{ij} = A_{ji}^{\dagger}
$$
If $\mathbf{A^{\dagger}} = \mathbf{A}$ then the matrix is called _Hermitian_ or _self-adjoint_. If $\mathbf{A^{\dagger}} = -\mathbf{A}$, it is called _anti-hermitian_. Some other properties of the hermitian are:
$$(\mathbf{A}+\mathbf{B})^{\dagger} = \mathbf{A^{\dagger}}+\mathbf{B^{\dagger}}$$
$$(\mathbf{A}\mathbf{B})^{\dagger} = \mathbf{B^{\dagger}}\mathbf{A^{\dagger}}$$
Lastly, if
$$
\mathbf{A^{\dagger}} = \mathbf{A^{-1}} \implies \mathbf{A}\mathbf{A^{\dagger}} = \mathbf{A^{\dagger}}\mathbf{A}=\mathbf{I}
$$
then the matrix is called _unitary_.


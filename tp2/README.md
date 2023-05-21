# CG 2022/2023

## Group T10G12

## TP 2 Notes

- For the first exercise, we had a fair amount of difficulties figuring out how the matrix worked, being that we did not realize that it was the same as mathematical matrixes. Due to that we were not able to do the first exercise without the teachers help. After the fact, we were able to use the matrix as we wanted without much problem. On the second exercise, it was much easier to do what we were asked since the functions used were easy and straightforward compared with the matrix. On the last exercise we had arrived at another dead-lock, not understanding how to solve the problem, but after a long time we figured out that we needed to do the same as in the MyScene, that is, importing the objects, initializing the objects and then create the display function. Even though we had done this, our tangram was not showing, the reason being we did not call the geometric transformation functions with scene (ex: this.translate(...); -> this.scene.translate(...);). Upon making this change, we had our tangram like we see in the image bellow.

![Screenshot 1](screenshots/CG-t10g12-tp2-1.png)

- In this exercise we had to create a cube, which was no problem at all since we haven't used any geometric transformations yet, so it was pretty straightforward. When we finished our cube, we were instructed to reintroduce the Tangram from the previous exercise and making so that the cube was behind it, for that we simply translated the cube in a way that they would not intersect, so that they wouldn't start Z-Fighting, but still very close to each other. After doing that we only had to make them parallel to the XZ plane and make the top left corner of the cube touch the (0,0,0) position. To do this we rotated and translated both objects in accordance to specifications.

![Screenshot 2](screenshots/CG-t10g12-tp2-2.png)

- In this exercise we made a cube again, but this time using only geometric transformations. Since this was what we did in previous exercises, we did not have any difficulties.

![Screenshot 3](screenshots/CG-t10g12-tp2-3.png)

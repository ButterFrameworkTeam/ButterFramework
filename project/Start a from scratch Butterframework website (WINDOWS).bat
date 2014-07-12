@ECHO OFF
COLOR F1
CLS

rem Init and Disable echo

rem choose
SET blank=
SET /p blank=Create you website from scratch? It deleting all stuff (image and the base template)y/n?
IF "%blank%"=="y" GOTO yes
IF "%blank%"=="n" GOTO no

:yes
cd ..
rem remove some files
DEL /f .gitignore
DEL /f index.html
DEL /f about.html
DEL /f *.html
DEL /f *.css
DEL /f *.js
DEL /f img
DEL /f css
cls
echo -=-=-=-=-=-=-=-=-=-=-
echo =====================
echo =  ButterFramework  =
echo =====================
echo -=-=-=-=-=-=-=-=-=-=-
echo A default page is in the framework, go to "bframework" folder and "html". Copy "defaultpage.html" here.

pause
cls

:no
EXIT

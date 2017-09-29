### CMakeLists automatically created with AutoVala
### Do not edit

EXECUTE_PROCESS( COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-source --target=${CMAKE_CURRENT_BINARY_DIR}/o2d.gresource.xml.c ${CMAKE_CURRENT_SOURCE_DIR}/o2d.gresource.xml)
EXECUTE_PROCESS( COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-header --target=${CMAKE_CURRENT_BINARY_DIR}/o2d.gresource.xml.h ${CMAKE_CURRENT_SOURCE_DIR}/o2d.gresource.xml)
ADD_CUSTOM_COMMAND (
	OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/o2d.gresource.xml.c
	DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/o2d.gresource.xml ${CMAKE_CURRENT_SOURCE_DIR}/project.dt ${CMAKE_CURRENT_SOURCE_DIR}/scenes/LeaderboardScene.dt ${CMAKE_CURRENT_SOURCE_DIR}/scenes/MainScene.dt ${CMAKE_CURRENT_SOURCE_DIR}/scenes/MenuScene.dt ${CMAKE_CURRENT_SOURCE_DIR}/scenes/OptionsScene.dt ${CMAKE_CURRENT_SOURCE_DIR}/particles/bigFire ${CMAKE_CURRENT_SOURCE_DIR}/particles/blood ${CMAKE_CURRENT_SOURCE_DIR}/particles/particles ${CMAKE_CURRENT_SOURCE_DIR}/particles/portalIn ${CMAKE_CURRENT_SOURCE_DIR}/particles/portalOut ${CMAKE_CURRENT_SOURCE_DIR}/particles/pulse ${CMAKE_CURRENT_SOURCE_DIR}/orig/pack.atlas ${CMAKE_CURRENT_SOURCE_DIR}/orig/pack.png ${CMAKE_CURRENT_SOURCE_DIR}/freetypefonts/Arial.ttf ${CMAKE_CURRENT_SOURCE_DIR}/freetypefonts/OpenDyslexic-Regular.ttf
	COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-source --target=${CMAKE_CURRENT_BINARY_DIR}/o2d.gresource.xml.c ${CMAKE_CURRENT_SOURCE_DIR}/o2d.gresource.xml

	COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-header --target=${CMAKE_CURRENT_BINARY_DIR}/o2d.gresource.xml.h ${CMAKE_CURRENT_SOURCE_DIR}/o2d.gresource.xml
)

add_custom_target(o2d_gresource_xml DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/o2d.gresource.xml.c)
SET (o2d_gresource_xml_C_FILE ${CMAKE_CURRENT_BINARY_DIR}/o2d.gresource.xml.c PARENT_SCOPE)
SET (o2d_gresource_xml_H_FILE ${CMAKE_CURRENT_BINARY_DIR}/o2d.gresource.xml.h PARENT_SCOPE)
EXECUTE_PROCESS( COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-source --target=${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml)
EXECUTE_PROCESS( COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-header --target=${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.h ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml)
ADD_CUSTOM_COMMAND (
	OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c
	DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml ${CMAKE_CURRENT_SOURCE_DIR}/fonts/arial-15.fnt ${CMAKE_CURRENT_SOURCE_DIR}/fonts/arial-15.bmp ${CMAKE_CURRENT_SOURCE_DIR}/fonts/Arial.ttf ${CMAKE_CURRENT_SOURCE_DIR}/fonts/TitanOne-Regular.ttf ${CMAKE_CURRENT_SOURCE_DIR}/fonts/OpenDyslexic-Bold.otf ${CMAKE_CURRENT_SOURCE_DIR}/images/BackdropBlackLittleSparkBlack.png ${CMAKE_CURRENT_SOURCE_DIR}/images/bang.png ${CMAKE_CURRENT_SOURCE_DIR}/images/bullet.png ${CMAKE_CURRENT_SOURCE_DIR}/images/enemy1.png ${CMAKE_CURRENT_SOURCE_DIR}/images/enemy2.png ${CMAKE_CURRENT_SOURCE_DIR}/images/enemy3.png ${CMAKE_CURRENT_SOURCE_DIR}/images/explosion.png ${CMAKE_CURRENT_SOURCE_DIR}/images/spaceshipspr.png ${CMAKE_CURRENT_SOURCE_DIR}/images/star.png ${CMAKE_CURRENT_SOURCE_DIR}/sounds/asplode.wav ${CMAKE_CURRENT_SOURCE_DIR}/sounds/pew.wav ${CMAKE_CURRENT_SOURCE_DIR}/sounds/smallasplode.wav
	COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-source --target=${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml

	COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-header --target=${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.h ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml
)

add_custom_target(resources_gresource_xml DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c)
SET (resources_gresource_xml_C_FILE ${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c PARENT_SCOPE)
SET (resources_gresource_xml_H_FILE ${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.h PARENT_SCOPE)
install(FILES ${CMAKE_CURRENT_SOURCE_DIR}/shmupwarz.desktop DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/applications/ )

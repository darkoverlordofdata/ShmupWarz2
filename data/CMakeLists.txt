### CMakeLists automatically created with AutoVala
### Do not edit

EXECUTE_PROCESS( COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-source --target=${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml)
EXECUTE_PROCESS( COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-header --target=${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.h ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml)
ADD_CUSTOM_COMMAND (
	OUTPUT ${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c
	DEPENDS ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml ${CMAKE_CURRENT_SOURCE_DIR}/images/background.bmp ${CMAKE_CURRENT_SOURCE_DIR}/images/bang.bmp ${CMAKE_CURRENT_SOURCE_DIR}/images/bullet.bmp ${CMAKE_CURRENT_SOURCE_DIR}/images/enemy1.bmp ${CMAKE_CURRENT_SOURCE_DIR}/images/enemy2.bmp ${CMAKE_CURRENT_SOURCE_DIR}/images/enemy3.bmp ${CMAKE_CURRENT_SOURCE_DIR}/images/explosion.bmp ${CMAKE_CURRENT_SOURCE_DIR}/images/fighter.bmp ${CMAKE_CURRENT_SOURCE_DIR}/images/particle.bmp ${CMAKE_CURRENT_SOURCE_DIR}/images/star.bmp ${CMAKE_CURRENT_SOURCE_DIR}/sounds/asplode.wav ${CMAKE_CURRENT_SOURCE_DIR}/sounds/pew.wav ${CMAKE_CURRENT_SOURCE_DIR}/sounds/smallasplode.wav
	COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-source --target=${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml

	COMMAND glib-compile-resources --sourcedir=${CMAKE_CURRENT_SOURCE_DIR} --generate-header --target=${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.h ${CMAKE_CURRENT_SOURCE_DIR}/resources.gresource.xml
)

add_custom_target(resources_gresource_xml DEPENDS ${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c)
SET (resources_gresource_xml_C_FILE ${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.c PARENT_SCOPE)
SET (resources_gresource_xml_H_FILE ${CMAKE_CURRENT_BINARY_DIR}/resources.gresource.xml.h PARENT_SCOPE)
install(FILES ${CMAKE_CURRENT_SOURCE_DIR}/shmupwarz.appdata.xml DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/appdata/ )
install(FILES ${CMAKE_CURRENT_SOURCE_DIR}/shmupwarz.desktop DESTINATION ${CMAKE_INSTALL_DATAROOTDIR}/applications/ )

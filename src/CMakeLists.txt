### CMakeLists automatically created with AutoVala
### Do not edit

set (DATADIR "${CMAKE_INSTALL_PREFIX}/${CMAKE_INSTALL_DATAROOTDIR}")
set (PKGDATADIR "${DATADIR}/shmupwarz")
set (GETTEXT_PACKAGE "shmupwarz")
set (RELEASE_NAME "shmupwarz")
set (CMAKE_C_FLAGS "")
set (PREFIX ${CMAKE_INSTALL_PREFIX})
set (VERSION "0.0.1")
set (TESTSRCDIR "${CMAKE_SOURCE_DIR}")
set (DOLLAR "$")

configure_file (${CMAKE_SOURCE_DIR}/src/Config.vala.cmake ${CMAKE_BINARY_DIR}/src/Config.vala)
add_definitions(-DGETTEXT_PACKAGE=\"${GETTEXT_PACKAGE}\")
set (VERSION "0.0.1")
add_definitions (${DEPS_CFLAGS})
link_libraries ( ${DEPS_LIBRARIES} )
link_directories ( ${DEPS_LIBRARY_DIRS} )
find_package (Vala REQUIRED)
include (ValaVersion)
ensure_vala_version ("0.34" MINIMUM)
include (ValaPrecompile)

set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_gfx)
set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_image)
set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_mixer)
set (VALA_PACKAGES ${VALA_PACKAGES} SDL2_ttf)
set (VALA_PACKAGES ${VALA_PACKAGES} bosco)
set (VALA_PACKAGES ${VALA_PACKAGES} entitas)
set (VALA_PACKAGES ${VALA_PACKAGES} sdl2)
set (VALA_PACKAGES ${VALA_PACKAGES} gee-0.8)
set (VALA_PACKAGES ${VALA_PACKAGES} gio-2.0)
set (VALA_PACKAGES ${VALA_PACKAGES} glib-2.0)
set (VALA_PACKAGES ${VALA_PACKAGES} gobject-2.0)

set (APP_SOURCES ${APP_SOURCES} ${CMAKE_CURRENT_BINARY_DIR}/Config.vala)
set (APP_SOURCES ${APP_SOURCES} Components.gs)
set (APP_SOURCES ${APP_SOURCES} Entities.gs)
set (APP_SOURCES ${APP_SOURCES} Game.gs)
set (APP_SOURCES ${APP_SOURCES} Main.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/CollisionSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ColorTweenSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/DestroySystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/EntitySpawningTimerSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ExpiringSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/HealthRenderSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/HudRenderSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/MovementSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/PlayerInputSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/RemoveOffscreenShipsSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/RenderPositionSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ScaleTweenSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/SoundEffectSystem.gs)
set (APP_SOURCES ${APP_SOURCES} Systems/ViewManagerSystem.gs)
set (APP_SOURCES ${APP_SOURCES} shmupwarz.vala)

set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --vapidir=${CMAKE_SOURCE_DIR}/src/vapis )

if ((${CMAKE_BUILD_TYPE} STREQUAL "Debug") OR (${CMAKE_BUILD_TYPE} STREQUAL "RelWithDebInfo"))
	set(COMPILE_OPTIONS ${COMPILE_OPTIONS} "-g")
endif()

set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --disable-warnings )
set (COMPILE_OPTIONS ${COMPILE_OPTIONS} --gresources=${CMAKE_SOURCE_DIR}/data/resources.gresource.xml )

set (CMAKE_C_FLAGS "${CMAKE_C_FLAGS} -w" )

vala_precompile(VALA_C shmupwarz
	${APP_SOURCES}
PACKAGES
	${VALA_PACKAGES}
OPTIONS
	${COMPILE_OPTIONS}
)

SET (VALA_C ${VALA_C} ${resources_gresource_xml_C_FILE})
add_executable(shmupwarz ${VALA_C})
add_dependencies (shmupwarz resources_gresource_xml)
target_link_libraries( shmupwarz m )


install(TARGETS
	shmupwarz
RUNTIME DESTINATION
	${CMAKE_INSTALL_BINDIR}
)
if(HAVE_VALADOC)
	valadoc(shmupwarz
		${CMAKE_BINARY_DIR}/valadoc/shmupwarz
		${APP_SOURCES}
	PACKAGES
		${VALA_PACKAGES}
	CUSTOM_VAPIS
		${CUSTOM_VAPIS_LIST}
	)
	install(DIRECTORY
		${CMAKE_BINARY_DIR}/valadoc
	DESTINATION
		${CMAKE_INSTALL_DATAROOTDIR}/doc/shmupwarz
	)
endif()
